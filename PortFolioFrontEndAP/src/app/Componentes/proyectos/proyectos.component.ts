import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { ProyectosService } from 'src/app/servicios/Proyectos.service';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proy: Proyectos[]=[];
mostrar:boolean=false;
  
constructor(private router: Router, public ProyServ:ProyectosService,private loginServ: LoginService) {};

ngOnInit(): void {
    this.ProyServ.ProList().subscribe(pro=>{this.proy=pro});
  }
public botonAgregar() {
    this.router.navigate(['agregarproy']);
  } 
public botonEdiccion() {
  this.router.navigate(['ediccionproy/:id']);
}
public botonEliminar() {
  this.router.navigate(['eliminarproy/:id']);
}
mostrarB() {
  return this.loginServ.habilitarBotones();  
 }
}
