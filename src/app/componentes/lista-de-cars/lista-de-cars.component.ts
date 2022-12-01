import { Component, OnInit } from '@angular/core';
import {Car} from "../../interfaces/car.interface";
import {CarService} from "../../servicios/car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-de-cars',
  templateUrl: './lista-de-cars.component.html',
  styleUrls: ['./lista-de-cars.component.scss']
})
export class ListaDeCarsComponent implements OnInit {
  public cars: any=[];

  constructor(private carService : CarService, private router:Router) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(datos=>this.cars =datos);
  }
  eliminarAuto(id: string):void{
    this.carService.deleteCar(id).subscribe(res=>{
      this.carService.getCars().subscribe(datos=>this.cars=datos);
    });
  }

}
