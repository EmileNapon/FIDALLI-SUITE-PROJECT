import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/tousModel';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class GestionnaireFormationComponent implements OnInit {
  formations: Formation[] = [];

  constructor(
    private formationService: FormationService,private router: Router
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

  onSelectProgrammeTalent(DasbordFormationId: number): void {
    this.router.navigate([`/gestionnaire/dasbord/${DasbordFormationId}/dasbord-prog-talent`]); 
  }
    

}
