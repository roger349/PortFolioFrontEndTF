import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/Educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  mostar!:boolean
  url='http://backendpf.fly.dev /educacion';

  constructor(private http: HttpClient) { }

  public EduList(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+'/verdatosEdu');
  }
  public agregarEdu(educ: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.url + '/agregardatosEdu', educ);
  }

  public actualizarEdu(id: number, educ: Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.url + `/updatedatosEdu/${id}`, educ);
  }
  public deleteEdu(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/deletedatosEdu/${id}`);
  }
  
}
