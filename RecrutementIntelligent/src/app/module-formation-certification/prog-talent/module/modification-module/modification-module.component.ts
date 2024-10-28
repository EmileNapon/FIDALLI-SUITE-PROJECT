import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../../models/tousModel';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-modification-module',
  templateUrl: './modification-module.component.html',
  styleUrls: ['./modification-module.component.css']
})
export class ModificationModuleComponent implements OnInit {
  moduleForm: FormGroup;
  moduleId!: number;

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialisation du formulaire réactif avec les champs requis
    this.moduleForm = this.fb.group({
      nom_module: ['', Validators.required],
      code: ['', Validators.required],
      domaine_id: [null, Validators.required] // Assurez-vous d'avoir la clé étrangère vers formation
    });
  }

  ngOnInit(): void {
    // this.moduleId = +this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du module à partir de l'URL
    this.moduleId = this.route.snapshot.params['id'];
    this.loadModule(); // Charger les données du module
    // this.moduleForm.patchValue({ formation_id: 1 });  
    // this.moduleForm.patchValue({formation_id: 2});
  }

  loadModule(): void {
    this.moduleService.getModuleById(this.moduleId).subscribe((module: Module) => {
      this.moduleForm.patchValue({
        nom_module: module.nom_module,
        code: module.code,
        domaine_id: module.domaine_id
      });
    });
  }

  updateModule(): void {
    if (this.moduleForm.valid) {
      const updatedModule: Module = { id: this.moduleId, ...this.moduleForm.value };
      this.moduleService.updateModule(updatedModule).subscribe(() => {
        this.router.navigate(['/formation/gestionnairePage']); // Redirection après modification du module
      });
    }
  }
}
