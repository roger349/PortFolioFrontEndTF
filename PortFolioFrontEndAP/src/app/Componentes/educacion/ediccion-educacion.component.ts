import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ediccion-educacion',
  templateUrl: './ediccion-educacion.component.html',
  styleUrls: ['./ediccion-educacion.component.css']
})
export class EdiccionEducacionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
public regresarPrincipal() {
    this.router.navigate(['']);
} 
}
