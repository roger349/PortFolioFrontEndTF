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

ExpLa!: ExperienciaLaboral;

constructor(private router:Router, private explServ:ExperienciaLaboralServService,  private activatedRouter: ActivatedRoute) { }

ngOnInit(): void {
  
  }
public regresarPrincipal() {
    this.router.navigate(['']);
}
actualizarExp(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.explServ.actualizarExp(id,this.ExpLa).subscribe(data => {
           alert("Experiencia modificada")});
    }  
}