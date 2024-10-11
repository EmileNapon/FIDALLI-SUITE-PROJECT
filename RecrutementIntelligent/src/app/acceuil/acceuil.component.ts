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



ngOnInit():void{

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



  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Vérifie si l'utilisateur est connecté
  }

  getUserEmail(): string | null {
    return this.authService.getUserEmail(); // Récupérer l'email de l'utilisateur connecté
  }
}
