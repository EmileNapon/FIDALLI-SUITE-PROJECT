import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affectation } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  private apiUrl = 'http://localhost:3000/affectations'; // Remplacer par votre API

  constructor(private http: HttpClient) {}

  getAffectations(): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(this.apiUrl);
  }

  getAffectationById(id: number): Observable<Affectation> {
    return this.http.get<Affectation>(`${this.apiUrl}/${id}`);
  }

  addAffectation(affectation: Affectation): Observable<Affectation> {
    return this.http.post<Affectation>(this.apiUrl, affectation);
  }

  updateAffectation(affectation: Affectation): Observable<Affectation> {
    return this.http.put<Affectation>(`${this.apiUrl}/${affectation.id}`, affectation);
  }

  deleteAffectation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
