import { HttpClient } from '@angular/common/http';
import { AuthService } from '../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { ServiceConnexionPrincipale } from '../service-connexion-etudiant-principale.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../gestion-utilisateurs/inscription/service-inscription/service-inscription.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  constructor(private domaine : UserService, private fb: FormBuilder ,private authService: AuthService, private ServiceConnexion: ServiceConnexionPrincipale, private http: HttpClient) {}
  myf!:FormGroup
  showSearch = false;
  userEmail: string | null = null;

  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;

ngOnInit():void{
  this.userInfo = this.authService.getUserInfo();



  ///////////////////////////////////

  this.myf = this.fb.group({
    nom_domaine:''
  });

  //////////////////////////////////////////////
}

  onLogout(): void {
    this.authService.logout();
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


//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh




onSubmit(): void {
  
    const domaine:any= this.myf.value;
    console.log(domaine)
    this.domaine.add(domaine).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        console.log(domaine)
      },
      error: (error) => {
        console.error('Error registering user:', error);
      }
    });
  }
    //////////////////////////////////////////////////////////////////////
  }

