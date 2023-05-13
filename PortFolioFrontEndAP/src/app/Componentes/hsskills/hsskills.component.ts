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
mostrar:boolean=false;

constructor(private router:Router ,private Tec: TecnologiasService ,private loginServ: LoginService){}

ngOnInit(): void {
    this.Tec.TecList().subscribe(tec => { this.tecno=tec;
      console.log(tec);} )         
}
public botonEdiccion() {
  this.router.navigate(['agregarhys']);
}
public botonEliminar() {
  this.router.navigate(['actualizarhys/:id']);
}
mostrarB() {
  return this.loginServ.habilitarBotones();  
 }
}
