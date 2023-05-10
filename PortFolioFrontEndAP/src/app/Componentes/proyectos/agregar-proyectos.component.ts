import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {}
public regresarPrincipal() {
  this.router.navigate(['']);
} 
}
