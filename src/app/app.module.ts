import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './servicio/weather.service';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarrComponent } from './componentes/editarr/editarr.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { SistemasComponent } from './componentes/sistemas/sistemas.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    ListarEmpleadoComponent,
    EditarEmpleadoComponent,
    AgregarEmpleadoComponent,
    EditarrComponent,
    ClimaComponent,
    SistemasComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
