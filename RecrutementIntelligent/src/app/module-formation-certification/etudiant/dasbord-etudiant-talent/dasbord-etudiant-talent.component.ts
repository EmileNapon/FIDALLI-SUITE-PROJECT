import { Component, OnInit } from '@angular/core';
import { Annonce, CustomUser, Group, Module, Seance } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
import { ModuleService } from '../services/module.service';
import { ModuleFormationService } from '../services/moduleFormation.service';
import { AnnonceService } from '../services/annonce.service';
import { GroupeService } from '../services/groupe.service';
import { SeanceService } from '../services/seance.service';

@Component({
  selector: 'app-dasbord-etudiant-talent',
  templateUrl: './dasbord-etudiant-talent.component.html',
  styleUrls: ['./dasbord-etudiant-talent.component.css']
})
export class DasbordEtudiantTalentComponent implements OnInit{

  showAnnonce!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;

  utilisateurs: CustomUser[] = [];
  etudiants: CustomUser[] = [];
  encadrants: CustomUser[] = [];

  modules: Module[] = [];
  selectedModules: { moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module

  // -------------------
  annonces: Annonce[] = [];
  groupes: Group[] = [];
  seances: Seance[] = [];

  constructor(
    private utilisateurService: UtilisateurService,
    private moduleService: ModuleService,
    private annonceService: AnnonceService,
    private groupeSeance: GroupeService,
    private seanceService: SeanceService,
    private moduleFormationService: ModuleFormationService,
  ) { }
  
  ngOnInit():void{
    this.showAnnonce = true;
    // this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
    // this.showAjoutModule = false;

    this.loadModules();
    // this.loadAnnonces();
    // this.loadGroupe();
    // this.loadSeances();


    // this.loadUser();
  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowFormation(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }

  onAjoutModule(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;

  }


//   // Charger les annonces à partir du service
//   loadAnnonces(): void {
//     this.annonceService.getAnnonces().subscribe(data => {
//       this.annonces = data;
//     });
//   }


// loadGroupe(){
//   this.groupeSeance.getGroupes().subscribe((groupes: Group[]) =>{
//     this.groupes = groupes;
//   });
// }

// loadUser(){
//   this.utilisateurService.getEtudiants().subscribe((data: CustomUser[]) => {
//     this.etudiants = data;
//   });
// }

loadModules(): void {
  this.moduleService.getModules().subscribe(
    (data) => {
      this.modules = data;
    },
    (error) => {
      console.error('Erreur lors du chargement des modules:', error);
    }
  );
}


loadSeances(): void {
  this.seanceService.getSeances().subscribe(
    (data) => {
      this.seances = data;
      console.log("/////////////////",this.seances)
    },
    (error) => {
      console.error('Erreur lors du chargement des formations:', error);
    }
  );
}


// Méthode pour filtrer les séances par module
getSeancesByModule(moduleId: string): Seance[] {
  return this.seances.filter(seance => seance.moduleFormation_id.toString() === moduleId);
}
  


}