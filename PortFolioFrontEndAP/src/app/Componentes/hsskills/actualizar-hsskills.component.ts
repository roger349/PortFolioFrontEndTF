import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-hsskills',
  templateUrl: './actualizar-hsskills.component.html',
  styleUrls: ['./actualizar-hsskills.component.css']
})
export class ActualizarHsskillsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
  } 
}
