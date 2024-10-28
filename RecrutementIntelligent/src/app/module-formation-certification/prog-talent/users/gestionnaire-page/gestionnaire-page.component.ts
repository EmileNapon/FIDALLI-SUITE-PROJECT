import { Component } from '@angular/core';
import { CustomUser } from '../../models/tousModel';
import { UtilisateurService } from '../../services/utilisateur.service';
@Component({
  selector: 'app-gestionnaire-page',
  templateUrl: './gestionnaire-page.component.html',
  styleUrls: ['./gestionnaire-page.component.css']
})
export class GestionnairePageComponent {

  showAnnonce!: boolean;
  showFormation!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;

  utilisateurs: CustomUser[] = [];
  etudiants: CustomUser[] = [];
  encadrants: CustomUser[] = [];

  constructor(private utilisateurService: UtilisateurService) { }
  
  ngOnInit():void{
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;

    // this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
    //   this.utilisateurs = data;
    // });

    // this.utilisateurService.getEtudiants().subscribe((data: Etudiant[]) => {
    //   this.etudiants = data;
    // });
    // this.utilisateurService.getEncadrants().subscribe((data: Encadrant[]) => {
    //   this.encadrants = data;
    // });
  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowFormation(){
    this.showAnnonce = false;
    this.showFormation = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }
  

 
getGroupes() {
  const groupes = [];
  for (let i = 0; i < this.utilisateurs.length; i += 3) {
      // Filtrer uniquement les étudiants pour former les groupes
      const etudiants = this.utilisateurs.filter(user => user.role === 'etudiant');
      
      // Ajouter les étudiants par groupes de 3
      groupes.push(etudiants.slice(i, i + 3));
  }
  return groupes;
}


}
