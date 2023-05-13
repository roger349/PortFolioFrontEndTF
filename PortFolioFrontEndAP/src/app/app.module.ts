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
import { ActualizarHsskillsComponent } from './Componentes/hsskills/actualizar-hsskills.component';
import { AgregarHsskillsComponent } from './Componentes/hsskills/agregar-hsskills.component';
import { AgregarProyectosComponent } from './Componentes/proyectos/agregar-proyectos.component';
import { ActualizarProyectosComponent } from './Componentes/proyectos/actualizar-proyectos.component';
import { EdiccionEducacionComponent } from './Componentes/educacion/ediccion-educacion.component';
import { EliminarProyectosComponent } from './Componentes/proyectos/eliminar-proyectos.component';
import { EliminarEducacionComponent } from './Componentes/educacion/eliminar-educacion.component';
import { EdiccionExpComponent } from './Componentes/experiencia/ediccion-exp.component';

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
    ActualizarHsskillsComponent,
    AgregarHsskillsComponent,
    AgregarProyectosComponent,
    ActualizarProyectosComponent,
    EdiccionEducacionComponent,
    EliminarProyectosComponent,
    EliminarEducacionComponent,
    EdiccionExpComponent
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
