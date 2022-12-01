import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../interfaces/car.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any>{
    return this.http.get('/servidor/cars');
  }
  addCar(car:Car):Observable<any> {
    return this.http.post('/servidor/cars/', car);
  }
  getCar(id: string): Observable<any>{
    return this.http.get(`/servidor/cars/${id}`);
  }
  deleteCar(id: string): Observable<any>{
    return this.http.delete(`/servidor/cars/${id}`);
  }
  updateCar(id:string,car:Car):Observable<any>{
    return this.http.patch(`/servidor/cars/${id}`, car);
  }
}
