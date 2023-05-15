import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/Proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = 'http://localhost:8080/proyecto';

  constructor(private http : HttpClient) { }

  public ProList(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url+'/verdatosPro');
  }
  public agregarProy(educ: Proyectos): Observable<Proyectos>{
    return this.http.post<Proyectos>(this.url + '/agregardatosPro', educ);
  }
  public actualizarProy(id: number, educ: Proyectos): Observable<Proyectos>{
    return this.http.put<Proyectos>(this.url + `/updatedatosPro/${id}`, educ);
  }
  public deleteProy(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/deletePro/${id}`);
  }
}

