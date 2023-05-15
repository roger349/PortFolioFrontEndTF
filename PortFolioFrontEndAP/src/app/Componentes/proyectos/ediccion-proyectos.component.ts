import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { ProyectosService } from 'src/app/servicios/Proyectos.service';

@Component({
  selector: 'app-ediccion-proyectos',
  templateUrl: './ediccion-proyectos.component.html',
  styleUrls: ['./ediccion-proyectos.component.css']
})
export class EdiccionProyectosComponent implements OnInit {
  id!:number;
  pro: Proyectos = new Proyectos("","");
  constructor(private router:Router, private proServ:ProyectosService) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
actualizarproy(): void {
  this.proServ.actualizarProy(this.id,this.pro).subscribe( data => {
      alert("Educacion modificada")});
 }
}
