import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-logos-ap-redes-sociales-login',
  templateUrl: './logos-ap-redes-sociales-login.component.html',
  styleUrls: ['./logos-ap-redes-sociales-login.component.css']
})
export class LogosApRedesSocialesLoginComponent implements OnInit  {
  loginUserOn:Boolean=false;

    constructor(private router:Router, private loginServ: LoginService) {}
  
    ngOnInit(): void {
    }
    
  loginuser(){
    this.router.navigate(["/loginuser"])

  }
  
  paginaPrincipal(){
      this.loginServ.logget=false;
      this.router.navigate(['home'])
  }
  mostrarB() {
    return this.loginServ.habilitarBotones();  
   }
}
