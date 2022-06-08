import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formularioDePasaje:FormGroup;//declamos un formulario para usarlo en el constructor
  
  constructor(
     public formulario:FormBuilder,
     private crudService:CrudService,
     private ruteador:Router
     ) {
this.formularioDePasaje=this.formulario.group({//en este formulario tenemos los datos que vamos a solicitar
  nombre:[''],
  correo:[''],
  destino:[''],
  hora:[''],
  fecha:['']
});


   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    //console.log("Presionado");
    //console.log(this.formularioDePasaje.value);
    this.crudService.AgregarPasaje(this.formularioDePasaje.value).subscribe()//aqui nos permite almacenar los datos 
    this.ruteador.navigateByUrl('/Listar');// y aqui nos regresa a la pagina donde tenemos la lista
    
  }

}
