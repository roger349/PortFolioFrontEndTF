import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonales } from 'src/app/modelos/DatosPersonales.model';
import { UserLogin } from 'src/app/modelos/UserLogin.model';
import { DatosPersonalesServService } from 'src/app/servicios/DatosPersonalesServ.service';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})

export class AcercadeComponent implements OnInit{

 DatosPer: DatosPersonales[]=[];
 
  constructor(private router:Router, private DPServ: DatosPersonalesServService, private loginServ: LoginService) {}

  ngOnInit(): void {
  this.DPServ.DatPer().subscribe( data => {this.DatosPer = data});
  } 
  
  public visualizarBotones():boolean {
     return this.loginServ.Habilitarlogueo();
  }
  
}
