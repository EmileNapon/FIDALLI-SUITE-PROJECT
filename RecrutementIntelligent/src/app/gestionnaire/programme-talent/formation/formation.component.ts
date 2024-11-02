import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/tousModel';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[] = [];

  constructor(
    private formationService: FormationService,
  ) {}

  ngOnInit(): void {
    this.loadFormations();
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
