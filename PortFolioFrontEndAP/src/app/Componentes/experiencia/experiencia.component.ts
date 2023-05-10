import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/modelos/ExperienciaLaboral.model';
import { ExperienciaLaboralServService } from 'src/app/servicios/ExperienciaLaboralServ.service';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exper: ExperienciaLaboral[] = [];
  
  constructor(private router:Router ,private ELServ : ExperienciaLaboralServService, private loginServ:LoginService) {};
  
ngOnInit(): void {
  this.ELServ.ExpList().subscribe(exp => { this.exper=exp;
      console.log(exp);} )  
}
public visualizarBotones():boolean {
    return this.loginServ.Habilitarlogueo();
}
public botonAgregar() {
     this.router.navigate(['agregarExp']);
}
public botonEliminar() {
  this.router.navigate(['eliminarExp/:id']);
}
public botonActualizar() {
  this.router.navigate(['actualizarExp/:id']);
}
}


