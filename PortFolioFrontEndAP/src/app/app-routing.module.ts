import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginuserComponent } from './Componentes/loginuser/loginuser.component';
import { AgregarExpComponent } from './Componentes/experiencia/agregar-exp.component';
import { EliminarExpComponent } from './Componentes/experiencia/eliminar-exp.component';
import { ActualizarEducacionComponent } from './Componentes/educacion/actualizar-educacion.component';
import { AgregarEducacionComponent } from './Componentes/educacion/agregar-educacion.component';
import { ActualizarExpComponent } from './Componentes/experiencia/actualizar-exp.component';
import { AgregarHsskillsComponent } from './Componentes/hsskills/agregar-hsskills.component';
import { AgregarProyectosComponent } from './Componentes/proyectos/agregar-proyectos.component';
import { ActualizarProyectosComponent } from './Componentes/proyectos/actualizar-proyectos.component';
import { ActualizarHsskillsComponent } from './Componentes/hsskills/actualizar-hsskills.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'loginuser', component: LoginuserComponent},
  { path: 'agregarExp', component: AgregarExpComponent},
  { path: 'eliminarExp/:id', component: EliminarExpComponent},
  { path: 'actualizarExp', component: ActualizarExpComponent},
  { path: 'agregarEdu', component: AgregarEducacionComponent},
  { path: 'actualizarEdu', component: ActualizarEducacionComponent},
  { path: 'agregarhys', component: AgregarHsskillsComponent},
  { path: 'actualizarhys', component: ActualizarHsskillsComponent},
  { path: 'agregarProy', component: AgregarProyectosComponent},
  { path: 'actualizarProy', component: ActualizarProyectosComponent},
  { path: 'eliminarProy/:id', component: EliminarProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
