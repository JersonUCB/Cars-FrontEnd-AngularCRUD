import { Component, OnInit } from '@angular/core';
import {Car} from "../../interfaces/car.interface";
import {CarService} from "../../servicios/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulario-auto',
  templateUrl: './formulario-auto.component.html',
  styleUrls: ['./formulario-auto.component.scss']
})
export class FormularioAutoComponent implements OnInit {

  car: Car={
    marca :'',
    modelo :'',
    anio:0,
    procedencia :'',
    imgURL: ''
  };
  constructor(private carServicio: CarService,
              private  route:ActivatedRoute,
              private activatedRoute:ActivatedRoute) { }

  /*ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      //this.carServicio.getCar(String(this.route.snapshot.paramMap.get('id'))).subscribe(res => this.car = res);
      this.carServicio.getCar(params.id).subscribe(
        res => {
          console.log(res);
          this.car=res;
        }
      )
    }
    }*/
  ngOnInit(): void {
    this.getAuto();
  }

  getAuto() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.carServicio.getCar(id).subscribe(car => this.car = car);
  }

    agregarAuto()
    {
      this.carServicio.addCar(this.car).subscribe(res => console.log(res), err => console.log(err));
    }

  }
