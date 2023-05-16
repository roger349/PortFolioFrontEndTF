import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../modelos/DatosPersonales.model';

@Injectable({

  providedIn: 'root'
})

export class DatosPersonalesServService {

  url= 'http://backendpf.fly.dev/persona/verdatos';
  
  constructor(private http:HttpClient) { }
    
  public DatPer(): Observable<DatosPersonales[]> {
    return this.http.get<DatosPersonales[]>(this.url);
  }   
}

