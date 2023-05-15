import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { ProyectosService } from 'src/app/servicios/Proyectos.service';

@Component({
  selector: 'app-agregarproy',
  templateUrl: './agregarproy.component.html',
  styleUrls: ['./agregarproy.component.css']
})
export class AgregarproyComponent implements OnInit {
  
  tipo_proyecto: string = '';
  descripcion_proyecto: string = '';
  
  constructor(private proyServ: ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
addproy(): void {
  const proye = new Proyectos(this.tipo_proyecto, this.descripcion_proyecto);
  this.proyServ.agregarProy(proye).subscribe( data => {
      alert("Proyecto agregado")});
  }  
}

