import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeanceService } from '../../services/seance.service';
import { Seance } from '../../models/tousModel';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.css']
})
export class AjoutSeanceComponent {
  seanceForm: FormGroup;  
  moduleId!: number;

  constructor(
    private fb: FormBuilder,  
    private seanceService: SeanceService,  
    private route: ActivatedRoute,
    private router: Router  
  ) {
    // Initialisation du formulaire réactif
    this.seanceForm = this.fb.group({
      lieu: ['', [Validators.required]],  
      formateur: ['', [Validators.required]],  
      date: ['', [Validators.required]],  
      heure_debut: ['', [Validators.required]],  // Champ "heure de début"
      heure_fin: ['', [Validators.required]],  // Champ "heure de fin"
      statut: ['En attente'],  // Valeur par défaut pour le statut
      module_id: [null, [Validators.required]]  
    });
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    this.seanceForm.patchValue({ module_id: this.moduleId });  // Assigne l'ID du module
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
