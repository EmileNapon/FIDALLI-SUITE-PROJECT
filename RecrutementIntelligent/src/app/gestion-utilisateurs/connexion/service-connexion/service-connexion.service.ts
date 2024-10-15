import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli'; // Base URL de votre API

  constructor(private http: HttpClient) {
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) {
      this.userEmail = storedEmail; // Récupérer l'email de l'utilisateur à partir du localStorage
    }
  }

  private userEmail: string | null = null;

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login/`; // Remplacez par l'URL de votre endpoint de connexion
    const body = { email, password };
    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map((response: any) => {
      this.userEmail = email;
      localStorage.setItem('user_email', email); // Stocker l'email dans le localStorage
      return response;
    }));
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_email'); // Supprimer l'email de localStorage lors de la déconnexion
    this.userEmail = null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getUserEmail(): string | null {
    return this.userEmail; // Retourner l'email stocké
  }
  
}
