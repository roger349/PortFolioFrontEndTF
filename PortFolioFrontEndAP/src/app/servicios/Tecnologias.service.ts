import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologias } from '../modelos/Tecnologias.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  url = 'http://localhost:8080/tecnologia';

  constructor(private http : HttpClient) { }

  public TecList(): Observable<Tecnologias[]>{
    return this.http.get<Tecnologias[]>(this.url+'/verdatosTec');
  }

  public agregarDatosTec(tec: Tecnologias): Observable<any>{
    return this.http.post<any>(this.url + '/agregardatosTec', tec);
  }

  public updatedatosTec(id: number, tec: Tecnologias): Observable<any>{
    return this.http.put<any>(this.url + `/updatedatosTec/${id}`, tec);
  }

  public deleteTec(id: number): Observable<any>{
    return this.http.delete(this.url + `/deleteTec/${id}`);
  }
}
