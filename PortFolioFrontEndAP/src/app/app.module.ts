import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { AcercadeComponent } from './Componentes/acercade/acercade.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { HsskillsComponent } from './Componentes/hsskills/hsskills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { LoginuserComponent } from './Componentes/loginuser/loginuser.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LogosApRedesSocialesLoginComponent } from './Componentes/logos-ap-redes-sociales-login/logos-ap-redes-sociales-login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarExpComponent } from './Componentes/experiencia/eliminar-exp.component'
import { EdiccionEducacionComponent } from './Componentes/educacion/ediccion-educacion.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';
import { EliminarEducacionComponent } from './Componentes/educacion/eliminar-educacion.component';
import { EdiccionExpComponent } from './Componentes/experiencia/ediccion-exp.component';
import { EliminarHsskillsComponent } from './Componentes/hsskills/eliminar-hsskills.component';
import { EdiccionHsskillsComponent } from './Componentes/hsskills/ediccion-hsskills.component';
import { EdiccionProyectosComponent } from './Componentes/proyectos/ediccion-proyectos.component';
import { AgregarexperienciaComponent } from './Componentes/experiencia/agregarexperiencia.component';
import { AgregareducacionComponent } from './Componentes/educacion/agregareducacion.component';
import { AgregarhysComponent } from './Componentes/hsskills/agregarhys.component';
import { AgregarproyComponent } from './Componentes/proyectos/agregarproy.component';

 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsskillsComponent,
    ProyectosComponent,
    LoginuserComponent,
    BannerComponent,
    HomeComponent,
    LogosApRedesSocialesLoginComponent,
    FooterComponent,
    EliminarExpComponent,
    EdiccionEducacionComponent,
    EliminarProyectosComponent,
    EliminarEducacionComponent,
    EdiccionExpComponent,
    EliminarHsskillsComponent,
    EdiccionHsskillsComponent,
    EdiccionProyectosComponent,
    AgregarexperienciaComponent,
    AgregareducacionComponent,
    AgregarhysComponent,
    AgregarproyComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
