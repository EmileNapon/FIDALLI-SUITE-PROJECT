import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/tousModel';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.component.html',
  styleUrls: ['./ajout-annonce.component.css']
})
export class AjoutAnnonceComponent {
  annonceForm: FormGroup;

  constructor(private fb: FormBuilder, private annonceService: AnnonceService, private router: Router) {
    // Initialisation du formulaire avec validation
    this.annonceForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      dateCours: ['', Validators.required],
      description: ['', Validators.required],
      datePublication: ['', Validators.required],
      heure: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.annonceForm.patchValue({
      datePublication: new Date(),
      heure: new Date().getTime,
    })
  }

  // Méthode pour ajouter une nouvelle annonce
  ajouterAnnonce(): void {
    if (this.annonceForm.valid) {
      const newAnnonce: Annonce =this.annonceForm.value;
      this.annonceService.addAnnonce(newAnnonce).subscribe(() => {
        
          this.router.navigate(['/formation/gestionnairePage']); // Redirection après ajout
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de annonce', error); // Gérer les erreurs
        }
      );
    }
  }
}
