import { Component, OnInit } from '@angular/core';
import { CustomUser } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

  // utilisateurs: Utilisateur[] = [];
  etudiants: CustomUser[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit():void{
    // this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
    //   this.utilisateurs = data;
    // });

    this.utilisateurService.getEtudiants().subscribe((data: CustomUser[]) => {
      this.etudiants = data;
    });
  }

}
