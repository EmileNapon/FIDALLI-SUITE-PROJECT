import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Seance } from '../../models/tousModel';
import { SeanceService } from '../../services/seance.service';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-modification-seance',
  templateUrl: './modification-seance.component.html',
  styleUrls: ['./modification-seance.component.css']
})
export class ModificationSeanceComponent implements OnInit{

  seanceForm: FormGroup;  
  seanceId!: number;
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
      statut: ['', [Validators.required]],  // Valeur par défaut pour le statut
      moduleFormation_id: [null, [Validators.required]]  
    });
  }

  ngOnInit(): void {
    // this.moduleId = +this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du module à partir de l'URL
    this.seanceId = this.route.snapshot.params['id'];
    this.loadSeance(); // Charger les données du module
    // this.moduleForm.patchValue({ formation_id: 1 });  
    // this.moduleForm.patchValue({formation_id: 2});

    // Récupérer les modules disponibles
    this.moduleService.getModules().subscribe(modules => {
      this.modules = modules;
    });
  }

  loadSeance(): void {
    this.seanceService.getSeanceById(this.seanceId).subscribe((seance: Seance) => {
      this.seanceForm.patchValue({
        lieu: seance.lieu,
        date_formation: seance.date_formation,
        heure_debut: seance.heure_debut,
        heure_fin: seance.heure_fin,
        statut: seance.statut,
        moduleFormation_id: seance.moduleFormation_id 
      });
    });
  }

  updateSeance(): void {
    if (this.seanceForm.valid) {
      const updatedModule: Seance = { id: this.seanceId, ...this.seanceForm.value };
      this.seanceService.updateSeance(updatedModule).subscribe(() => {
        this.router.navigate(['/formation/gestionnairePage']); // Redirection après modification du module
      });
    }
  }

}
