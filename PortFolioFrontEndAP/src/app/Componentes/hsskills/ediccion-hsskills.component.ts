import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Tecnologias } from 'src/app/modelos/Tecnologias.model';
import { TecnologiasService } from 'src/app/servicios/Tecnologias.service';

@Component({
  selector: 'app-ediccion-hsskills',
  templateUrl: './ediccion-hsskills.component.html',
  styleUrls: ['./ediccion-hsskills.component.css']
})
export class EdiccionHsskillsComponent implements OnInit {
  
  id!:number;
  tec: Tecnologias = new Tecnologias("",1);

  constructor(private router:Router, private tecServ:TecnologiasService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
actualizarhys(): void {
  this.tecServ.actualizarTec(this.id,this.tec).subscribe( data => {
      alert("Educacion modificada")});
 }  
}
