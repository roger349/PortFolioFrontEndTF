import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../modelos/UserLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
logget!:boolean;  
DLogin: UserLogin = new UserLogin()

private url1= "http://backendpf.fly.dev/userLogin/login";

constructor(private router:Router, private http:HttpClient) {}

loginUser(userLogin:UserLogin ) : Observable<object> { 
  return this.http.post(this.url1, userLogin);    
  }
  
public habilitarBotones():boolean {
  return this.logget
} 
}             