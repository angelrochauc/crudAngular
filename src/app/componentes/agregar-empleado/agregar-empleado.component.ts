import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleado:FormGroup;

  constructor(
     public formulario:FormBuilder,
     private crudService:CrudService,
     private ruteador:Router
     ) {
this.formularioDeEmpleado=this.formulario.group({
  nombre:[''],
  correo:[''],
  salario:[''],
  fecha:['']
});


   }

  ngOnInit(): void {
  }
  enviarDatosE():any{
    console.log("Presionado");
    console.log(this.formularioDeEmpleado.value);
    this.crudService.AgregarEmpleado(this.formularioDeEmpleado.value).subscribe()
    this.ruteador.navigateByUrl('listar-empleado');
    
  }

}