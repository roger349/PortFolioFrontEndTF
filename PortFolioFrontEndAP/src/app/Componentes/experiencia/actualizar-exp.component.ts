import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-exp',
  templateUrl: './actualizar-exp.component.html',
  styleUrls: ['./actualizar-exp.component.css']
})
export class ActualizarExpComponent implements OnInit {

constructor(private router:Router ) { }

ngOnInit(): void {
}
public regresarPrincipal() {
  this.router.navigate(['']);
} 
}
