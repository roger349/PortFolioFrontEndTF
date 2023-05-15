import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/modelos/ExperienciaLaboral.model';
import { ExperienciaLaboralServService } from 'src/app/servicios/ExperienciaLaboralServ.service';

@Component({
  selector: 'app-agregarexperiencia',
  templateUrl: './agregarexperiencia.component.html',
  styleUrls: ['./agregarexperiencia.component.css']
})
export class AgregarexperienciaComponent implements OnInit {

  id_experiencia!: number; 
  nombre_empresa: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  descripcion_puesto: string = '';
  
  constructor(private router:Router, private explServ:ExperienciaLaboralServService,  private activatedRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    
  }
  public regresarPrincipal() {
      this.router.navigate(['']);
  }
  addExp(): void {
    const ExpeL = new ExperienciaLaboral(this.nombre_empresa, this.fecha_inicio, this.fecha_fin, this.descripcion_puesto);
    this.explServ.agregarExp(ExpeL).subscribe( data => {
        alert("Experiencia agregada")});
    }  
  }