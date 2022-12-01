import { Component, OnInit } from '@angular/core';
import {Car} from "../../interfaces/car.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../servicios/car.service";

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.scss']
})
export class EditarAutoComponent implements OnInit {

  car: Car={
    marca :'',
    modelo :'',
    anio:0,
    procedencia :'',
    imgURL: ''
  };
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.getAuto();
  }

  getAuto() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe(car => this.car = car);
  }
  submitCar() {
    this.carService.updateCar(String(this.car.id), this.car).subscribe(res => {console.log(res);this.router.navigate(['/'])}, err => console.log(err));
  }
}
