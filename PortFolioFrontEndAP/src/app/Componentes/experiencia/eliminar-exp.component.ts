import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-exp',
  templateUrl: './eliminar-exp.component.html',
  styleUrls: ['./eliminar-exp.component.css']
})
export class EliminarExpComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {
}
public regresarPrincipal() {
  this.router.navigate(['']);
} 
}
