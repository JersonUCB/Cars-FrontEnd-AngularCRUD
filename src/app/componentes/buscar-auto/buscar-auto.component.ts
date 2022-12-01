import { Component, OnInit } from '@angular/core';
import {CarService} from "../../servicios/car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar-auto',
  templateUrl: './buscar-auto.component.html',
  styleUrls: ['./buscar-auto.component.scss']
})
export class BuscarAutoComponent implements OnInit {

  public car: any;

  constructor(private carService : CarService, private  route: ActivatedRoute) { }

  ngOnInit(): void {
   this.carService.getCar(String(this.route.snapshot.paramMap.get('buscado'))).subscribe(datos=>{this.car=datos});
  }

  eliminarAuto(id: string):void{
    this.carService.deleteCar(id).subscribe(res=>{
      this.carService.getCars().subscribe(datos=>this.car=datos);
    });
  }
}
