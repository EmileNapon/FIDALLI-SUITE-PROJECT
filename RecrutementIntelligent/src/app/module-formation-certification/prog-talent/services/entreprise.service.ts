import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entrepriseModel';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private apiUrl = 'path-to-your-json/utilisateurs_donnees.json';  // URL vers votre fichier JSON

  constructor(private http: HttpClient) { }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.apiUrl}/entreprises`);
  }
}
