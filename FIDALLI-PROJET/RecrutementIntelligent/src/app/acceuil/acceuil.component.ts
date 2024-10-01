<<<<<<< HEAD
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
=======
import { AuthService } from './../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
<<<<<<< HEAD
export class AcceuilComponent {

  showSearch = false;
=======
export class AcceuilComponent implements OnInit{
constructor(private AuthService: AuthService){

}
  showSearch = false;
nom:any;
prenom:any;


ngOnInit():void{
  this.nom=this.AuthService.nom;
 this.prenom=this.AuthService.prenom;
}

>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

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
