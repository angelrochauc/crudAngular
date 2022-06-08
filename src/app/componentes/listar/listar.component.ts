import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  Pasajes:any;


  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerPasaje().subscribe(respuesta=>{
      console.log(respuesta);
      this.Pasajes=respuesta;
      
    });
  }
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea Borrar Registro?")){
      this.crudService.BorrarPasaje(id).subscribe((respuesta)=>{
        this.Pasajes.splice(iControl,1);
      });
    }
    
  }

}
