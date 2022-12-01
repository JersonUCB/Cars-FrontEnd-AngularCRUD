import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaDeCarsComponent} from "./componentes/lista-de-cars/lista-de-cars.component";
import {FormularioAutoComponent} from "./componentes/formulario-auto/formulario-auto.component";
import {BuscarAutoComponent} from "./componentes/buscar-auto/buscar-auto.component";
import {EditarAutoComponent} from "./componentes/editar-auto/editar-auto.component";

const routes: Routes = [
  { path: "car",component: ListaDeCarsComponent},
  { path: "car/agregar",component: FormularioAutoComponent},
  { path: 'car/buscar/:buscado',component: BuscarAutoComponent},
  { path: 'car/edit/:id',component: EditarAutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
