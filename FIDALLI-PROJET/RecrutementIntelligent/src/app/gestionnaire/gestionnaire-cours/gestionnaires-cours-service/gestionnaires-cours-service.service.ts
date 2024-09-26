import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GestionnairesCoursServiceService {

 
  private matieresUrl = 'http://localhost:9999/matieres';

  constructor( private http: HttpClient ) { }

  
  getMatieres(): Observable<any[]> {
    return this.http.get<any[]>(this.matieresUrl);
  }

  addMatieres(matiere: any): Observable<any> {
    return this.http.post(`${this.matieresUrl}/`, matiere);
  }
  

  
}
