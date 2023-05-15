import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/modelos/ExperienciaLaboral.model';
import { ExperienciaLaboralServService } from 'src/app/servicios/ExperienciaLaboralServ.service';

@Component({
  selector: 'app-ediccion-exp',
  templateUrl: './ediccion-exp.component.html',
  styleUrls: ['./ediccion-exp.component.css']
})
export class EdiccionExpComponent implements OnInit {

id!:number;
exper: ExperienciaLaboral = new ExperienciaLaboral("","","","");
constructor(private router:Router, private expServ:ExperienciaLaboralServService,  private activatedRouter: ActivatedRoute) { }

ngOnInit(): void {
  
  }
public regresarPrincipal() {
    this.router.navigate(['']);
}
actualizarExp(): void {
  this.expServ.actualizarExp(this.id,this.exper).subscribe( data => {
      alert("Educacion modificada")});
 }  
}