import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasaje } from './Vuelo';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string='http://localhost/pasajes/'
  API2:string='http://localhost/Empleados/'

  constructor(private clienteHttp:HttpClient ) {}
//aqui usamos la informacion que tenemos en el JSON para poder consumir dichos datos y guardalos en el JSON
  AgregarPasaje(datosPasaje:Pasaje):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosPasaje);
  }

ObtenerPasaje(){
  return this.clienteHttp.get(this.API);
}
BorrarPasaje(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+id);
}
ObtenerPasa(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);
}
EditarPasaje(id:any,datosPasaje:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+id,datosPasaje);
}


AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
  return this.clienteHttp.post(this.API2+"?insertar=1",datosEmpleado);
}

ObtenerEmpleado(){
return this.clienteHttp.get(this.API2);
}
BorrarEmpleado(id:any):Observable<any>{
return this.clienteHttp.get(this.API2+"?borrar="+id);
}
ObtenerEmple(id:any):Observable<any>{
return this.clienteHttp.get(this.API2+"?consultar="+id);
}
EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
return this.clienteHttp.post(this.API2+"?actualizar="+id,datosEmpleado);
}

}
