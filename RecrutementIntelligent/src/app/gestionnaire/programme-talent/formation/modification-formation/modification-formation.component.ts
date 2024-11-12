// import { Component, OnInit } from '@angular/core';
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
      niveau: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      duree: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      resume: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID de la formation à partir de l'URL
    this.formationId = this.route.snapshot.params['id'];
    this.loadFormation();
  }

  loadFormation(): void {
    // Récupère la formation à partir de l'ID
    this.formationService.getFormationById(this.formationId).subscribe((formation: Formation) => {
      this.formationForm.patchValue({
        titre: formation.titre,
        type: formation.type,
        niveau: formation.niveau,
        prix: formation.prix,
        duree: formation.duree,
        nombre: formation.nombre,
        location: formation.location,
        resume: formation.resume,
        description: formation.description
      });
    });
  }

  updateFormation(): void {
    if (this.formationForm.valid) {
     
      const updatedFormation: Formation = { id: this.formationId, ...this.formationForm.value };
      console.log(updatedFormation)
      this.formationService.updateFormation(updatedFormation).subscribe(() => {
        this.router.navigate(['/gestionnaire/dasbord-prog-talent']); // Redirection après modification
      });
    }
  }
}
