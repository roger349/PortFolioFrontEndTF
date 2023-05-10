import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {
}
public regresarPrincipal() {
    this.router.navigate(['']);
  } 
}
