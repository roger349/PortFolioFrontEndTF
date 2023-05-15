import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboralServService } from 'src/app/servicios/ExperienciaLaboralServ.service';

@Component({
  selector: 'app-eliminar-exp',
  templateUrl: './eliminar-exp.component.html',
  styleUrls: ['./eliminar-exp.component.css']
})
export class EliminarExpComponent implements OnInit {

id!:number; 

constructor(private router:Router, private explServ:ExperienciaLaboralServService) { }

ngOnInit(): void {
}
public regresarPrincipal() {
  this.router.navigate(['']);
} 
eliminarExp(){
  this.explServ.deleteExp(this.id).subscribe(data => { 
     alert("Experiencia Eliminada")});
  }

}

