import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/Proyectos.service';

@Component({
  selector: 'app-eliminar-proyectos',
  templateUrl: './eliminar-proyectos.component.html',
  styleUrls: ['./eliminar-proyectos.component.css']
})
export class EliminarProyectosComponent implements OnInit {


  id!:number; 

  constructor(private router:Router, private proyServ:ProyectosService) { }
  
  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
  } 
  eliminarproy(){
    this.proyServ.deleteProy(this.id).subscribe(data => { 
       alert("Tecnologia Eliminada")});
    }
  
  }
