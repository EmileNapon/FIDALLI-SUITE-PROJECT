import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/tousModel';

@Component({
  selector: 'app-modification-formation',
  templateUrl: './modification-formation.component.html',
  styleUrls: ['./modification-formation.component.css']
})
export class ModificationFormationComponent implements OnInit {
  
  formation!: Formation[];
  formationForm: FormGroup;
  formationId!: number;

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
    // this.formationId = +this.route.snapshot.paramMap.get('id');
    this.formationId = this.route.snapshot.params['id'];
    this.loadFormation();
  }

  loadFormation(): void {
    this.formationService.getFormationById(this.formationId).subscribe((formation: Formation) => {
      // this.formationForm.patchValue(formation);
      this.formationForm.patchValue({
        titre: formation.titre,
        type: formation.type,
        domainesEligibles: formation.domainesEligibles,
        niveauRequis: formation.niveauRequis,
        prix: formation.prix,
        duree: formation.duree,
        nombrePlaces: formation.nombrePlaces,
        localisation: formation.localisation,
        resume: formation.resume,
        description: formation.description
    });
    });
  }

  updateFormation(): void {
    if (this.formationForm.valid) {
      const updatedFormation: Formation = { id: this.formationId, ...this.formationForm.value };
      this.formationService.updateFormation(updatedFormation).subscribe(() => {
        this.router.navigate(['/formation/gestionnairePage']); // Rediriger vers la page des formations après modification
      });
    }
  }
}
