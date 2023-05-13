import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginuserComponent } from './Componentes/loginuser/loginuser.component';
import { EliminarExpComponent } from './Componentes/experiencia/eliminar-exp.component';
import { EdiccionEducacionComponent } from './Componentes/educacion/ediccion-educacion.component';
import { AgregarHsskillsComponent } from './Componentes/hsskills/agregar-hsskills.component';
import { AgregarProyectosComponent } from './Componentes/proyectos/agregar-proyectos.component';
import { ActualizarProyectosComponent } from './Componentes/proyectos/actualizar-proyectos.component';
import { ActualizarHsskillsComponent } from './Componentes/hsskills/actualizar-hsskills.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';
import { EliminarEducacionComponent } from './Componentes/educacion/eliminar-educacion.component';
import { EdiccionExpComponent } from './Componentes/experiencia/ediccion-exp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent },
  {path: 'loginuser', component: LoginuserComponent},
  { path: 'ediccionExp', component: EdiccionExpComponent},
  { path: 'eliminarExp/:id', component: EliminarExpComponent},
  { path: 'ediccionEdu', component: EdiccionEducacionComponent},
  { path: 'eliminarEdu/:id', component: EliminarEducacionComponent},
  { path: 'agregarhys', component: AgregarHsskillsComponent},
  { path: 'actualizarhys/:id', component: ActualizarHsskillsComponent},
  { path: 'agregarProy', component: AgregarProyectosComponent},
  { path: 'actualizarProy/:id', component: ActualizarProyectosComponent},
  { path: 'eliminarProy/:id', component: EliminarProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
