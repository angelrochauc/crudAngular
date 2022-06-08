import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { EditarrComponent } from './componentes/editarr/editarr.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { SistemasComponent } from './componentes/sistemas/sistemas.component';



const routes: Routes = [
//todas las rutas que vamos a usar para que funcione las opciones a la hora de seleccionar una accion
  {path: '', pathMatch:'full', redirectTo:'Agregar'},
  {path:'Agregar', component:AgregarComponent},
  {path:'Listar', component:ListarComponent},
  {path:'Editar/:id', component:EditarComponent},
  {path:'Editarr/:id', component:EditarrComponent},
  {path: '', pathMatch:'full', redirectTo:'agregar-empleado'},
  {path:'agregar-empleado', component:AgregarEmpleadoComponent},
  {path:'listar-empleado', component:ListarEmpleadoComponent},
  {path:'editar-empleado/:id', component:EditarEmpleadoComponent},
  {path:'clima',component:ClimaComponent},
  {path:'sistemas',component:SistemasComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
