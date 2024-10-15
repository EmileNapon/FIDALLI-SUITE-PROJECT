import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';
import { Formation, Module } from '../models/tousModel';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[] = [];
  showDetail: boolean = false;
  shutDetail: boolean = true; // Pour contrôler l'affichage des détails
  profile: string = 'gestionnaire'; // À ajuster selon le profil utilisateur


  constructor(
    private formationService: FormationService,
    private moduleService: ModuleService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  onShowDetail(): void {
    this.showDetail = !this.showDetail;
    this.shutDetail = !this.shutDetail;
  }


  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data) => {
        this.formations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }

  
  deleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.loadFormations(); // Recharger la liste après la suppression
      });
    }
  }

  
}


