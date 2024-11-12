import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { ModuleService } from '../../../services/module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { ModuleFormationService } from '../../../services/moduleFormation.service';
import { CustomUser, Module } from '../../../models/tousModel';




@Component({
    selector: 'app-Moduleformation',
    templateUrl: './ajoutModule.component.html',
    styleUrls: ['./ajoutModule.component.css'],
  })

export class ajoutModuleComponent implements OnInit{

    formationForm!: FormGroup;
    modules: Module[] = [];
    selectedModules: {formation:string|null, moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module
    formateurs: CustomUser[] = [];  // Stocker les formateurs disponibles
    modulesFormations:any[]=[]
    formation: string |null=null

    constructor(


        private fb: FormBuilder, 
        private formationService: FormationService, 
        private moduleService: ModuleService,
        private moduleFormationService: ModuleFormationService,
        private utilisateurService: UtilisateurService,  // Pour récupérer les formateurs
        private router: Router, private route: ActivatedRoute,
    ){}


    ngOnInit(): void {


        this.formation = this.route.snapshot.paramMap.get('id_joutFormation');
    
        this.loadModules();
        this.loadFormateurs();  // Charger les formateurs disponibles
      }
    

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
            this.formateurs = data;
          },
          (error) => {
            console.error('Erreur lors du chargement des formateurs:', error);
          }
        );
      }
    


      loadModulesFormations(): void {
        this.moduleFormationService.getModuleFormations().subscribe(
          (data) => {
            this.modulesFormations = data;  
          },
          (error) => {
            console.error('Erreur lors du chargement des modules:', error);
          }
        );
      }
      





      // Méthode pour obtenir le nom d'un module à partir de son ID
      getModuleName(moduleId: number): string {
        const module = this.modules.find(m => m.id === moduleId);
        return module?module.nom_module : 'Module inconnu';
      }




        // Gestion de la sélection des modules
  onModuleSelectionChange(moduleId: number, event: any): void {
    if (event.target.checked) {
      // Ajouter le module à la sélection s'il n'existe pas déjà
      if (!this.selectedModules.some(selected => selected.moduleId === moduleId)) {
        this.selectedModules.push({formation:this.formation,moduleId, formateurIds: [] });
        console.log(this.selectedModules, 'pppppppppppppppppppp')
        console.log(this.modulesFormations, 'kkkkkkkkkkkkkk')
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


   valider():void{

    this.moduleFormationService.addModuleFormation(this.selectedModules).subscribe(
        response => {
    
            console.log('Nouvelle matière ajoutée avec succès', response)
        
          }
    )
   }
}