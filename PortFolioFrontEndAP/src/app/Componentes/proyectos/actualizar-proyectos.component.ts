import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-proyectos',
  templateUrl: './actualizar-proyectos.component.html',
  styleUrls: ['./actualizar-proyectos.component.css']
})
export class ActualizarProyectosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
public regresarPrincipal() {
    this.router.navigate(['']);
  } 
}
