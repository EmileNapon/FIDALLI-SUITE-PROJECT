import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import{Annonce} from '../model-service/model-annonce'
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private jsonUrl = 'http://localhost:9999/Annonces';  
  
  constructor(private http: HttpClient) {}

  // 1. Récupérer toutes les annonces
  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.jsonUrl);
  }

  // 2. Récupérer une annonce par ID
  getAnnonceById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.jsonUrl}/${id}`);
  }

}
