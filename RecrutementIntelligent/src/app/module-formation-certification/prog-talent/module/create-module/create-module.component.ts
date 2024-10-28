import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Module } from 'src/app/models/tousModel';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent  {

  moduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private router: Router
  ) {
    // Initialisation du formulaire réactif avec les champs requis
    this.moduleForm = this.fb.group({
      nom_module: ['', Validators.required],
      code: ['', Validators.required],
      domaine_id: [null, Validators.required] // Assurez-vous d'avoir la clé étrangère vers formation
    });
  }

  ngOnInit(): void {
    this.moduleForm.patchValue({ domaine_id: 1 });  // Assigne l'ID du module
  }

  // Méthode pour ajouter un nouveau module
  addModule(): void {
    if (this.moduleForm.valid) {
      const newModule: Module = this.moduleForm.value;

      // Appel au service pour ajouter le module
      this.moduleService.addModule(newModule).subscribe(
        () => {
          this.router.navigate(['/formation/gestionnairePage']); // Redirection après ajout
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du module', error); // Gérer les erreurs
        }
      );
    }
  }

}
