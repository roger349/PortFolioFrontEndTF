import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion.model';
import { EducacionService } from '../../servicios/Educacion.service'
import { UserLogin } from 'src/app/modelos/UserLogin.model';
import { LoginService } from 'src/app/servicios/login.services';
import { Router } from '@angular/router';
import { LoginuserComponent } from '../loginuser/loginuser.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educ: Educacion[] = [];
  mostrar:boolean=false;
  constructor(private router: Router, private eduservice : EducacionService, private loginServ: LoginService) {}
  
  ngOnInit(): void {
  this.eduservice.EduList().subscribe(edu => { this.educ=edu;
  console.log(edu);} )        
  }
public botonEdiccion() {
  this.router.navigate(['agregarEdu']);
}
public botonEliminar() {
this.router.navigate(['actualizarEdu/:id']);
}
mostrarB() {
 return this.loginServ.habilitarBotones();  
}
}
