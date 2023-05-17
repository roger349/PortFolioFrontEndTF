import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologias } from '../modelos/Tecnologias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  url=  environment.URL + 'tecnologia';

  constructor(private http : HttpClient) { }

  public TecList(): Observable<Tecnologias[]>{
    return this.http.get<Tecnologias[]>(this.url+'/verdatosTec');
  }

  public agregarTec(tec: Tecnologias): Observable<any>{
    return this.http.post<any>(this.url + '/agregardatosTec', tec);
  }

  public actualizarTec(id: number, tec: Tecnologias): Observable<any>{
    return this.http.put<any>(this.url + `/updatedatosTec/${id}`, tec);
  }

  public deleteTec(id: number): Observable<any>{
    return this.http.delete(this.url + `/deleteTec/${id}`);
  }
}
