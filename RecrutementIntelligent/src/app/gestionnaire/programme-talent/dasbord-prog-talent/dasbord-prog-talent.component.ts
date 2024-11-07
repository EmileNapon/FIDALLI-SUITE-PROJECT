import { Component } from '@angular/core';
import { CustomUser } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
import { Module } from '../models/tousModel';
import { ModuleService } from '../services/module.service';
import { ModuleFormationService } from '../services/moduleFormation.service';

@Component({
  selector: 'app-dasbord-prog-talent',
  templateUrl:'./dasbord-prog-talent.component.html',
  styleUrls: ['./dasbord-prog-talent.component.css']
})
export class GestionnaireDasbordProgTalentComponent {
  showAnnonce!: boolean;
  showFormation!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;
  showAjoutModule!: boolean;

  utilisateurs: CustomUser[] = [];
  etudiants: CustomUser[] = [];
  encadrants: CustomUser[] = [];

  modules: Module[] = [];
  selectedModules: { moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module

  constructor(
    private utilisateurService: UtilisateurService,
    private moduleService: ModuleService,
    private moduleFormationService: ModuleFormationService,
  ) { }
  
  ngOnInit():void{
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
    this.showAjoutModule = false;

    this.loadModules();
    this.loadFormateurs();  // Charger les formateurs disponibles

    // this.utilisateurService.getEtudiants().subscribe((data: CustomUser[]) => {
    //   this.etudiants = data;
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

  onAjoutModule(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
    this.showAjoutModule = true;

  }

  onShutAjoutModule(){
    this.showAjoutModule = false;
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


// Charger les modules disponibles
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

// Charger les formateurs (utilisateurs avec rôle 'encadrant')
loadFormateurs(): void {
  this.utilisateurService.getFormateurs().subscribe(
    (data) => {
      this.encadrants = data;
    },
    (error) => {
      console.error('Erreur lors du chargement des formateurs:', error);
    }
  );
}

  // Méthode pour obtenir le nom d'un module à partir de son ID
  getModuleName(moduleId: number): string {
    const module = this.modules.find(m => m.id === moduleId);
    return module ? module.nom_module : 'Module inconnu';
  }
  

  // Gestion de la sélection des modules
  onModuleSelectionChange(moduleId: number, event: any): void {
    if (event.target.checked) {
      // Ajouter le module à la sélection s'il n'existe pas déjà
      if (!this.selectedModules.some(selected => selected.moduleId === moduleId)) {
        this.selectedModules.push({ moduleId, formateurIds: [] });
      }
    } else {
      // Retirer le module de la sélection si la case est décochée
      this.selectedModules = this.selectedModules.filter(selected => selected.moduleId !== moduleId);
    }
  }

  // Gestion de la sélection des formateurs pour un module
  onFormateurSelectionChange(moduleId: number, formateurId: number, event: any): void {
    const module = this.selectedModules.find(selected => selected.moduleId === moduleId);
    if (module) {
      if (event.target.checked) {
        // Ajouter le formateur sélectionné à la liste des formateurs pour ce module
        module.formateurIds.push(formateurId);
      } else {
        // Retirer le formateur s'il est désélectionné
        module.formateurIds = module.formateurIds.filter(id => id !== formateurId);
      }
    }
  }

}
