<<<<<<< HEAD
import { Component, HostListener } from '@angular/core';
=======
import { DomaineService } from './acceuil-formation-services/acceuil-formations-services';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

@Component({
  selector: 'app-acceuil-formation',
  templateUrl: './acceuil-formation.component.html',
  styleUrls: ['./acceuil-formation.component.css']
})
<<<<<<< HEAD
export class AcceuilFormationComponent {

  isFixed: boolean = false;

=======
export class AcceuilFormationComponent implements OnInit {

  isFixed: boolean = false;
 change: boolean=false;
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec


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

<<<<<<< HEAD
=======
  change1(){
    this.change=true;
    return this.change
  }
  

domaines: any[] = [];

constructor(private domaineService: DomaineService, private router: Router) { }

ngOnInit(): void {
  this.loadDomaines();
}

loadDomaines(): void {
  this.domaineService.getDomaines().subscribe(data => {
    this.domaines = data;
  });
}

onSelectDomaine(domaineId: string): void {
  this.router.navigate([`/domaines/${domaineId}/cours`]); // Redirection vers la page des matières du domaine sélectionné
}
  



>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec
}
