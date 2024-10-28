import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Seance } from '../../models/tousModel';
import { ModuleService } from '../../services/module.service';
import { SeanceService } from '../../services/seance.service';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.css']
})
export class AjoutSeanceComponent {
  seanceForm: FormGroup;  
  moduleId!: number;
  modules: Module[] = [];  // Stockage des modules récupérés

  constructor(
    private fb: FormBuilder,  
    private seanceService: SeanceService,
    private moduleService: ModuleService,  
    private route: ActivatedRoute,
    private router: Router  
  ) {
    // Initialisation du formulaire réactif
    this.seanceForm = this.fb.group({
      lieu: ['', [Validators.required]],  
      date_formation: ['', [Validators.required]], 
      heure_debut: ['', [Validators.required]],  // Champ "heure de début"
      heure_fin: ['', [Validators.required]],  // Champ "heure de fin"
      statut: ['En attente'],  // Valeur par défaut pour le statut
      moduleFormation_id: [null, [Validators.required]]  
    });
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    this.seanceForm.patchValue({ module_id: this.moduleId });  // Assigne l'ID du module

    // Récupérer les modules disponibles
    this.moduleService.getModules().subscribe(modules => {
      this.modules = modules;
    });
  
  }

  addSeance(): void {
    if (this.seanceForm.valid) {
      const newSeance: Seance = this.seanceForm.value;
      this.seanceService.addSeance(newSeance).subscribe(() => {
        this.router.navigate(['/formation/gestionnairePage']);
      });
    }
  }
}
