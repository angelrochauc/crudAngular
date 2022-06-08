import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleado: FormGroup;
  eID: any;
  constructor(
    private activaeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private ruteador:Router
  ) {
    this.eID = this.activaeRoute.snapshot.paramMap.get('id');
    console.log(this.eID);
    this.crudService.ObtenerPasa(this.eID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDeEmpleado.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo'],
        fecha: respuesta[0]['fecha'],
          salario: respuesta[0]['salario']
        })

      }
    );
    this.formularioDeEmpleado = this.formulario.group({
      nombre: [''],
  
      correo: [''],
      salario: [''],
      fecha: ['']
    });

  }

  ngOnInit(): void {
  }
  enviarDatosE():any{
    
    console.log(this.eID);
    console.log(this.formularioDeEmpleado.value);
    this.crudService.EditarEmpleado(this.eID,this.formularioDeEmpleado.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    })
    
    
  }

}
