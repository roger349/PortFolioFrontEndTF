import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExperienciaLaboral } from '../modelos/ExperienciaLaboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralServService {

  url= "http://localhost:8080/experiencia"; 
  
  constructor(private http : HttpClient) { }
  
  public ExpList(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.url+'/verdatosExp');         
  }
  public agregarExt(experiencia: ExperienciaLaboral): Observable<any>{
    return this.http.post<any>(this.url + '/agregardatosExp', experiencia);
  }
  public updateExp(id: number, experiencia: ExperienciaLaboral): Observable<any>{
    return this.http.put<any>(this.url + `/updatedatosExp/${id}`, experiencia);
  }
  public deleteExp(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/deletedatosExp/${id}`);
  }
}
