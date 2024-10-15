import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur, Etudiant, Gestionnaire, Encadrant, Recruteur } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:3000/utilisateurs';  // URL vers votre fichier JSON ou API

  constructor(private http: HttpClient) { }

  // Méthode générique pour récupérer tous les utilisateurs
  getUtilisateurs(): Observable<Utilisateur[]> {  // Retirer l'argument newEncadrant
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  // Méthode pour filtrer par rôle
  getUtilisateursByRole(role: 'etudiant' | 'gestionnaire' | 'encadrant' | 'recruteur'): Observable<Utilisateur[]> {
    return this.getUtilisateurs().pipe(
      map((utilisateurs: Utilisateur[]) => utilisateurs.filter(utilisateur => utilisateur.role === role))
    );
  }

  // Méthodes spécifiques utilisant le filtre par rôle
  getEtudiants(): Observable<Etudiant[]> {
    return this.getUtilisateursByRole('etudiant') as Observable<Etudiant[]>;
  }

  getGestionnaires(): Observable<Gestionnaire[]> {
    return this.getUtilisateursByRole('gestionnaire') as Observable<Gestionnaire[]>;
  }

  getEncadrants(): Observable<Encadrant[]> {
    return this.getUtilisateursByRole('encadrant') as Observable<Encadrant[]>;
  }

  getRecruteurs(): Observable<Recruteur[]> {
    return this.getUtilisateursByRole('recruteur') as Observable<Recruteur[]>;
  }
}

