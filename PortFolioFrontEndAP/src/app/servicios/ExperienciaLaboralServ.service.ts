import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExperienciaLaboral } from '../modelos/ExperienciaLaboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralServService {

  url= "http://backendpf.fly.dev/experiencia"; 
  
  constructor(private http : HttpClient) { }
  
  public ExpList(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.url+'/verdatosExp');         
  }
  public agregarExp(experiencia: ExperienciaLaboral): Observable<any>{
    return this.http.post<any>(this.url + '/agregardatosExp', experiencia);
  }
  public actualizarExp(id: number, experienciaL: ExperienciaLaboral): Observable<ExperienciaLaboral>{
    return this.http.put<ExperienciaLaboral>(this.url + `/updatedatosExp/${id}`, experienciaL);
  }
  public deleteExp(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/deleteExperiencia/${id}`);
  }
}
