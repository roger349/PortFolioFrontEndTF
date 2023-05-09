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
import { AgregarExpComponent } from './Componentes/experiencia/agregar-exp.component';
import { ActualizarExpComponent } from './Componentes/experiencia/actualizar-exp.component';
import { EliminarExpComponent } from './Componentes/experiencia/eliminar-exp.component'
import { ActualizarHsskillsComponent } from './Componentes/hsskills/actualizar-hsskills.component';
import { AgregarHsskillsComponent } from './Componentes/hsskills/agregar-hsskills.component';
import { AgregarProyectosComponent } from './Componentes/proyectos/agregar-proyectos.component';
import { ActualizarProyectosComponent } from './Componentes/proyectos/actualizar-proyectos.component';
import { ActualizarEducacionComponent } from './Componentes/educacion/actualizar-educacion.component';
import { AgregarEducacionComponent } from './Componentes/educacion/agregar-educacion.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';

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
    AgregarExpComponent,
    ActualizarExpComponent,
    EliminarExpComponent,
    ActualizarHsskillsComponent,
    AgregarHsskillsComponent,
    AgregarProyectosComponent,
    ActualizarProyectosComponent,
    ActualizarEducacionComponent,
    AgregarEducacionComponent,
    EliminarProyectosComponent
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
