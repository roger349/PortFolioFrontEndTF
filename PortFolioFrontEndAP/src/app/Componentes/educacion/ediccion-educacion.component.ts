import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/Educacion.model';
import { EducacionService } from 'src/app/servicios/Educacion.service';


@Component({
  selector: 'app-ediccion-educacion',
  templateUrl: './ediccion-educacion.component.html',
  styleUrls: ['./ediccion-educacion.component.css']
})
export class EdiccionEducacionComponent implements OnInit {

/*educa: Educacion=;*/
id!:number;
educa: Educacion = new Educacion("","","");
constructor(private router:Router, private eduServ: EducacionService) { }

ngOnInit(): void {
  
  }
public regresarPrincipal() {
this.router.navigate(['']);
}

actualizarEdu(): void {
  this.eduServ.actualizarEdu(this.id,this.educa).subscribe( data => {
      alert("Educacion modificada")});
 } 
}