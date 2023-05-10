import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion.model';
import { EducacionService } from '../../servicios/Educacion.service'
import { UserLogin } from 'src/app/modelos/UserLogin.model';
import { LoginService } from 'src/app/servicios/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educ: Educacion[] = [];
  DatosUserLogin: UserLogin[]=[];
  constructor(private router: Router, private eduservice : EducacionService, private loginServ: LoginService) {}
  
  ngOnInit(): void {
  this.eduservice.EduList().subscribe(edu => { this.educ=edu;
  console.log(edu);} )
  this.loginServ.Listuserlogin().subscribe( data1 => {this.DatosUserLogin = data1})         
  }
public visualizarBotones():boolean {
    return this.loginServ.Habilitarlogueo();
 }
public botonAgregar() {
  this.router.navigate(['agregarEdu']);
}
public botonActualizar() {
this.router.navigate(['actualizarEdu/:id']);
} 
}
