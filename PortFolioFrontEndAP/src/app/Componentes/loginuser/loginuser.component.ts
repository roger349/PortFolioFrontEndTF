import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/modelos/UserLogin.model';
import { LoginService } from 'src/app/servicios/login.services';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

public loginform!:FormGroup; 
logeado = false;
userlogin!:UserLogin;
nombre_usuario!:string;
password_usuario!:string;

constructor(private router: Router, private formBuilder:FormBuilder, private loginServ: LoginService) { }
 
ngOnInit(): void  {
  this.loginform = this.crearloginform();
  }
  public crearloginform():FormGroup{
    return this.formBuilder.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
   }
   public enviarFormulario(){
    if(this.loginform.invalid){
       Object.values(this.loginform.controls).forEach(control =>{
         control.markAllAsTouched();
       }); 
       return;
       } 
    if(!this.loginServ.MostrarBotones({ obj: this.loginform.value })) {
       }
    }
    public get cont():any {
     return this.loginform.controls;
    } 
    volverPrincipal() {
      this.router.navigate(['']);
    } 
}  
