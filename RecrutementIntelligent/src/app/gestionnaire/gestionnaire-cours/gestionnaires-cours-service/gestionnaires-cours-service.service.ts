import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GestionnairesCoursServiceService {

  matiereGestionnaire:string[]=[]
  private matieresUrl = 'http://127.0.0.1:8000/fidalli/cours/list_cours';
  private admatieresUrl = 'http://127.0.0.1:8000/fidalli/cours/create';
  constructor( private http: HttpClient ) { }

  
  getCours(): Observable<any[]> {
    return this.http.get<any[]>(this.matieresUrl);
  }

  addCours(cour: any): Observable<any> {
    return this.http.post(`${this.admatieresUrl}/`, cour);
  }

}
