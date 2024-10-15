
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/tousModel';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.css']
})
export class AjoutFormationComponent implements OnInit {
  formationForm: FormGroup;

  constructor(private fb: FormBuilder, private formationService: FormationService, private router: Router) {
    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      domainesEligibles: ['', Validators.required],
      niveauRequis: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      duree: ['', Validators.required],
      nombrePlaces: ['', [Validators.required, Validators.min(1)]],
      localisation: ['', Validators.required],
      resume: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createFormation(): void {
    if (this.formationForm.valid) {
      const newFormation: Formation = { id: 0, ...this.formationForm.value };
      this.formationService.addFormation(newFormation).subscribe(() => {
        this.router.navigate(['/formation/gestionnairePage']); // Rediriger vers la page des formations après création
      });
    }
  }
}
