import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formularioDePasaje: FormGroup;
  elID: any;
  constructor(
    private activaeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private ruteador:Router
  ) {
    this.elID = this.activaeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerPasa(this.elID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDePasaje.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo'],
          destino: respuesta[0]['destino'],
          hora: respuesta[0]['hora'],
          fecha: respuesta[0]['fecha']
        })

      }
    );
    this.formularioDePasaje = this.formulario.group({
      nombre: [''],
  
      correo: [''],
      destino: [''],
      hora: [''],
      fecha: ['']
    });

  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    
    console.log(this.elID);
    console.log(this.formularioDePasaje.value);
    this.crudService.EditarPasaje(this.elID,this.formularioDePasaje.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/Listar');
    })
    
    
  }

}
