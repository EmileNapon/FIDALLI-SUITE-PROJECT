import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli'; // Base URL de votre API

  constructor(private http: HttpClient) {
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) {
      this.userEmail = storedEmail;
      this.userFirstName = localStorage.getItem('user_prenom'); // Récupérer le prénom
      this.userLastName = localStorage.getItem('user_nom');     // Récupérer le nom
      this.userProfilePic = localStorage.getItem('user_profile_pic'); // Optionnel, image
    }
  }

  private userEmail: string | null = null;
  private userFirstName: string | null = null;
  private userLastName: string | null = null;
  private userProfilePic: string | null = null;

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login/`;
    const body = { email, password };

    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map((response: any) => {
      // Adapter les champs en fonction de la structure de votre API (nom et prenom)
      this.userEmail = email;
      this.userFirstName = response.prenom;  // Correspond à la colonne 'prenom' dans la base de données
      this.userLastName = response.nom;      // Correspond à la colonne 'nom' dans la base de données
      this.userProfilePic = response.profilePic;

      // Stocker les informations dans le localStorage
      localStorage.setItem('user_email', email);
      localStorage.setItem('user_prenom', response.prenom); // Utiliser 'prenom'
      localStorage.setItem('user_nom', response.nom);       // Utiliser 'nom'
      localStorage.setItem('user_profile_pic', response.profilePic);

      return response;
    }));
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_prenom'); // Utiliser 'prenom'
    localStorage.removeItem('user_nom');    // Utiliser 'nom'
    localStorage.removeItem('user_profile_pic');

    this.userEmail = null;
    this.userFirstName = null;
    this.userLastName = null;
    this.userProfilePic = null;
  }

  getUserInfo(): { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } {
    return {
      email: this.userEmail,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      profilePic: this.userProfilePic
    };
  }
}

  

