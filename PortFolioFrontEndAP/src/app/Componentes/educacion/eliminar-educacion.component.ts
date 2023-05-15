import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/Educacion.service';

@Component({
  selector: 'app-eliminar-educacion',
  templateUrl: './eliminar-educacion.component.html',
  styleUrls: ['./eliminar-educacion.component.css']
})
export class EliminarEducacionComponent implements OnInit {

id!:number; 

constructor(private router:Router, private eduServ: EducacionService) { }

  ngOnInit(): void {
}
public regresarPrincipal() {
    this.router.navigate(['']);
}
eliminarEdu(){
  this.eduServ.deleteEdu(this.id).subscribe(data => { 
     alert("Experiencia Eliminada")});
  }


}

