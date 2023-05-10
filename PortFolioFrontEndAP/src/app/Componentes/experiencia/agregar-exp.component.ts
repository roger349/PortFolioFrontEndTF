import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})
export class AgregarExpComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {
  }
public regresarPrincipal() {
    this.router.navigate(['']);
  } 
}
