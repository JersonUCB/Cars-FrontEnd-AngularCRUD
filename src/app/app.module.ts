import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeCarsComponent } from './componentes/lista-de-cars/lista-de-cars.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './componentes/menu/menu.component';
import { FormularioAutoComponent } from './componentes/formulario-auto/formulario-auto.component';
import {FormsModule} from "@angular/forms";
import { BuscarAutoComponent } from './componentes/buscar-auto/buscar-auto.component';
import { EditarAutoComponent } from './componentes/editar-auto/editar-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeCarsComponent,
    MenuComponent,
    FormularioAutoComponent,
    BuscarAutoComponent,
    EditarAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
