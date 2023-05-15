import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginuserComponent } from './Componentes/loginuser/loginuser.component';
import { EliminarExpComponent } from './Componentes/experiencia/eliminar-exp.component';
import { EdiccionEducacionComponent } from './Componentes/educacion/ediccion-educacion.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';
import { EliminarEducacionComponent } from './Componentes/educacion/eliminar-educacion.component';
import { EdiccionExpComponent } from './Componentes/experiencia/ediccion-exp.component';
import { EdiccionHsskillsComponent } from './Componentes/hsskills/ediccion-hsskills.component';
import { EliminarHsskillsComponent } from './Componentes/hsskills/eliminar-hsskills.component';
import { EdiccionProyectosComponent } from './Componentes/proyectos/ediccion-proyectos.component';
import { AgregarexperienciaComponent } from './Componentes/experiencia/agregarexperiencia.component';
import { AgregareducacionComponent } from './Componentes/educacion/agregareducacion.component';
import { AgregarhysComponent } from './Componentes/hsskills/agregarhys.component';
import { AgregarproyComponent } from './Componentes/proyectos/agregarproy.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent },
  {path: 'loginuser', component: LoginuserComponent},
  { path: 'ediccionexp/:id', component: EdiccionExpComponent},
  { path: 'eliminarexp/:id', component: EliminarExpComponent},
  { path: 'agregarexp', component: AgregarexperienciaComponent},
  { path: 'ediccionedu/:id', component: EdiccionEducacionComponent},
  { path: 'agregaredu', component: AgregareducacionComponent},
  { path: 'eliminaredu/:id', component: EliminarEducacionComponent},
  { path: 'ediccionhys/:id', component: EdiccionHsskillsComponent},
  { path: 'eliminarhys/:id', component: EliminarHsskillsComponent},
  { path: 'agregarhys', component: AgregarhysComponent},
  { path: 'ediccionproy/:id', component: EdiccionProyectosComponent},
  { path: 'agregarproy', component: AgregarproyComponent},
  { path: 'eliminarproy/:id', component: EliminarProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
