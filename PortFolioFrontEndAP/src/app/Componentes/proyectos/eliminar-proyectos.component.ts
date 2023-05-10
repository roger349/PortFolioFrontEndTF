import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-proyectos',
  templateUrl: './eliminar-proyectos.component.html',
  styleUrls: ['./eliminar-proyectos.component.css']
})
export class EliminarProyectosComponent implements OnInit {

constructor(private router: Router) { }

ngOnInit(): void {
  }
public regresarPrincipal() {
   this.router.navigate(['']);
  } 
}
