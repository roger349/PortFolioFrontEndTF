import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiasService } from 'src/app/servicios/Tecnologias.service';

@Component({
  selector: 'app-eliminar-hsskills',
  templateUrl: './eliminar-hsskills.component.html',
  styleUrls: ['./eliminar-hsskills.component.css']
})
export class EliminarHsskillsComponent implements OnInit {

  id!:number; 

  constructor(private router:Router, private tecServ:TecnologiasService) { }
  
  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
  } 
  eliminarTec(){
    this.tecServ.deleteTec(this.id).subscribe(data => { 
       alert("Tecnologia Eliminada")});
    }
  
  }