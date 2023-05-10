import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologias } from 'src/app/modelos/Tecnologias.model';
import { TecnologiasService } from 'src/app/servicios/Tecnologias.service';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-hsskills',
  templateUrl: './hsskills.component.html',
  styleUrls: ['./hsskills.component.css']
})
export class HsskillsComponent implements OnInit{

  tecno: Tecnologias[] = [];

  constructor(private router:Router ,private Tec: TecnologiasService ,private loginServ: LoginService){}

  ngOnInit(): void {
    this.Tec.TecList().subscribe(tec => { this.tecno=tec;
      console.log(tec);} )         
  }
  public visualizarBotones():boolean {
    return this.loginServ.Habilitarlogueo();
 }
public botonAgregar() {
  this.router.navigate(['agregarhys']);
}
public botonActualizar() {
  this.router.navigate(['actualizarhys/:id']);
}
}
