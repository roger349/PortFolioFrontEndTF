import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-hsskills',
  templateUrl: './eliminar-hsskills.component.html',
  styleUrls: ['./eliminar-hsskills.component.css']
})
export class EliminarHsskillsComponent implements OnInit {

constructor(private router:Router) { }

ngOnInit(): void {
}
public regresarPrincipal() {
  this.router.navigate(['']);
} 
}
