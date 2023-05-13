import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-educacion',
  templateUrl: './eliminar-educacion.component.html',
  styleUrls: ['./eliminar-educacion.component.css']
})
export class EliminarEducacionComponent implements OnInit {

constructor(private router:Router) { }

  ngOnInit(): void {
}
public regresarPrincipal() {
    this.router.navigate(['']);
}  
}
