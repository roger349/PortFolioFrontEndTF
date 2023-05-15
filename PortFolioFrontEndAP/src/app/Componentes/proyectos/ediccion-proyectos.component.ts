import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ediccion-proyectos',
  templateUrl: './ediccion-proyectos.component.html',
  styleUrls: ['./ediccion-proyectos.component.css']
})
export class EdiccionProyectosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
}
