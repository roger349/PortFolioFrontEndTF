import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-educacion',
  templateUrl: './actualizar-educacion.component.html',
  styleUrls: ['./actualizar-educacion.component.css']
})
export class ActualizarEducacionComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {
}
public regresarPrincipal() {
    this.router.navigate(['']);
} 
}
