import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private FormationsUrl = 'http://localhost:9999/Formations';  
  
  constructor(private http: HttpClient) {}

  // 1. Récupérer toutes les annonces
  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.FormationsUrl);
  }

}
