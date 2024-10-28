import { Component, OnInit } from '@angular/core';
import { Service } from './service/service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class AcceuilProgrammeTalentComponent implements OnInit {
  formations: any[] = [];

  constructor(
    private formationService: Service,
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




}
