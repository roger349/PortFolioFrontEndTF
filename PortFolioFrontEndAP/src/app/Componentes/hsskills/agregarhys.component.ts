import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologias } from 'src/app/modelos/Tecnologias.model';
import { TecnologiasService } from 'src/app/servicios/Tecnologias.service';

@Component({
  selector: 'app-agregarhys',
  templateUrl: './agregarhys.component.html',
  styleUrls: ['./agregarhys.component.css']
})
export class AgregarhysComponent implements OnInit {

  nombre_tecnologia: string = '';
  porcentaje_tecnologia!: number;
  
  constructor(private router:Router, private tecServ: TecnologiasService) { }
  
  ngOnInit(): void {
    
  }
  public regresarPrincipal() {
      this.router.navigate(['']);
  }
  addTec(): void {
    const Tec = new Tecnologias(this.nombre_tecnologia, this.porcentaje_tecnologia);
    this.tecServ.agregarTec(Tec).subscribe( data => {
        alert("Tecnologia agregada")});
    }  
  }
