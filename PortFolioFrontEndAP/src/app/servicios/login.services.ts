import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../modelos/UserLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url= "http://localhost:8080/userLogin/verdatosUserLogin";

private ingresar:boolean=false;
  
constructor(private router:Router, private http:HttpClient) {}

public Listuserlogin(): Observable<UserLogin[]>{
  return this.http.get<UserLogin[]>(this.url);
}
public MostrarBotones({ obj }: { obj: any; }):boolean{
  this.ingresar = obj.usuario == 'roger' && obj.password=='1234';
  return this.ingresar; 
} 
public Habilitarlogueo():boolean{
  return this.ingresar 
  } 

} 

