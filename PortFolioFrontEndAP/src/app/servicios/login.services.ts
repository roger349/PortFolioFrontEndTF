import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../modelos/UserLogin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
logget!:boolean;  
DLogin: UserLogin = new UserLogin()

url=  environment.URL + 'login';

constructor(private router:Router, private http:HttpClient) {}

loginUser(userLogin:UserLogin ) : Observable<object> { 
  return this.http.post(this.url, userLogin);    
  }
  
public habilitarBotones():boolean {
  return this.logget
} 
}             