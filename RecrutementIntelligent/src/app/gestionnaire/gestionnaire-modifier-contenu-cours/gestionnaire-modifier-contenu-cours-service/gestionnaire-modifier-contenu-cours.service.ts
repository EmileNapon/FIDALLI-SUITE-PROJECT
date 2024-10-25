import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionnaireModifierContenuCoursService {

  private contenuUrl = 'http://127.0.0.1:8000/fidalli/contenus/list_contenus';  // URL de l'API
  private chapitreUrl = 'http://127.0.0.1:8000/fidalli/chapitre/list_chapitres';  // URL de l'API

  constructor(private http: HttpClient) { }

  getContenu(): Observable<any> {
    return this.http.get(`${this.contenuUrl}/`);
  }


  


  getChapitre(): Observable<any> {
    return this.http.get(`${this.chapitreUrl}/`);
  }


}
