import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../modelos/DatosPersonales.model';
import { environment } from 'src/environments/environment';

@Injectable({

  providedIn: 'root'
})

export class DatosPersonalesServService {


url = environment.URL + 'persona/verdatos';
  
constructor(private http:HttpClient) { }
    
public DatPer(): Observable<DatosPersonales[]> {
    return this.http.get<DatosPersonales[]>(this.url);
  }   
}

