import { Component, OnInit } from '@angular/core';
import { Etudiant, Utilisateur } from '../models/userModel';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

  utilisateurs: Utilisateur[] = [];
  etudiants: Etudiant[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit():void{
    // this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
    //   this.utilisateurs = data;
    // });

    this.utilisateurService.getEtudiants().subscribe((data: Etudiant[]) => {
      this.etudiants = data;
    });
  }

}
