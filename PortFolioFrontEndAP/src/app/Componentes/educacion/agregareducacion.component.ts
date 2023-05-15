import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/Educacion.model';
import { EducacionService } from 'src/app/servicios/Educacion.service';

@Component({
  selector: 'app-agregareducacion',
  templateUrl: './agregareducacion.component.html',
  styleUrls: ['./agregareducacion.component.css']
})
export class AgregareducacionComponent implements OnInit {
 
titulo: string = '';
condicion: string = '';
institucion: string = '';

constructor(private router:Router, private eduServ: EducacionService) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
addEdu(): void {
  const Educ = new Educacion(this.titulo, this.condicion, this.institucion);
  this.eduServ.agregarEdu(Educ).subscribe( data => {
      alert("Educacion agregada")});
  }  
}
