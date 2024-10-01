import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-acceuil-formation',
  templateUrl: './acceuil-formation.component.html',
  styleUrls: ['./acceuil-formation.component.css']
})
export class AcceuilFormationComponent {

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
