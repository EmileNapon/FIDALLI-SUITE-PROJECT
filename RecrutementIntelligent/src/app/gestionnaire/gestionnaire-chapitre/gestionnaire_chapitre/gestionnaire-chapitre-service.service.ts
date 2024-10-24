import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireChapitreServiceService {

  matiereGestionnaire:string[]=[]
  private chapitresUrl = 'http://127.0.0.1:8000/fidalli/chapitre/list_chapitres';
  private adchapitresUrl = 'http://127.0.0.1:8000/fidalli/chapitre/create';
  constructor( private http: HttpClient ) { }

  
  getChapitre(): Observable<any[]> {
    return this.http.get<any[]>(this.chapitresUrl);
  }

  addChapitre(cour: any): Observable<any> {
    return this.http.post(`${this.adchapitresUrl}/`, cour);
  }

}
