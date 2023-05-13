import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/modelos/UserLogin.model';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  logget:boolean= false ;
  DatosLogin: UserLogin = new UserLogin();
  DLogin: any ;

constructor(private router: Router, private loginServ: LoginService) { }
 
ngOnInit(): void  {
  }
   Login(){
      console.log(this.DatosLogin); 
      this.loginServ.loginUser(this.DatosLogin).subscribe( data => {alert("login correcto")});
      this.router.navigate(['']);
      this.logget=true;
      if(this.DatosLogin.usuario=='roger349@gmail.com' && this.DatosLogin.password=='12345') {            
                  this.loginServ.logget = this.logget;
      }                      
   }
   mostrarB() {
    return this.loginServ.habilitarBotones();  
   }
}  