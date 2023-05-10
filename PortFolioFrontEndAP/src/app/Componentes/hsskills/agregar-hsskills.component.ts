import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-hsskills',
  templateUrl: './agregar-hsskills.component.html',
  styleUrls: ['./agregar-hsskills.component.css']
})
export class AgregarHsskillsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
  } 
}
