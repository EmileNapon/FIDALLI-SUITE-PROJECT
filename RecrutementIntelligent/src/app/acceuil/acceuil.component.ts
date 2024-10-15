import { ServiceConnexionPrincipale } from '../service-connexion-etudiant-principale.service';
import { AuthService } from './../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  constructor(private authService: AuthService, private ServiceConnexion: ServiceConnexionPrincipale) {}

  showSearch = false;
  userEmail: string | null = null;


ngOnInit():void{
 // Vérifier si l'utilisateur est connecté et récupérer son email
 if (this.authService.isLoggedIn()) {
  this.userEmail = this.authService.getUserEmail();
}

}
onLogout(): void {
  this.authService.logout(); // Appeler la méthode de déconnexion du service d'authentification
  this.userEmail = null; // Réinitialiser l'email après déconnexion
}

isLoggedIn(): boolean {
  return this.authService.isLoggedIn(); // Vérifie si l'utilisateur est connecté
}

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  isFixed: boolean = false;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = 20;  // Distance de défilement avant que la navbar ne devienne fixe

    // Ajouter la classe fixed si l'utilisateur a défilé au-delà du seuil
    if (window.pageYOffset > scrollOffset) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }




}
