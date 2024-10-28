import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationDetailService {
  private jsonUrl = 'http://localhost:9999/Annonces';  
  
  constructor(private http: HttpClient) {}

  // 1. Récupérer toutes les annonces
  getAnnonces(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  // 2. Récupérer une annonce par ID
  getAnnonceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.jsonUrl}/${id}`);
  }

}
