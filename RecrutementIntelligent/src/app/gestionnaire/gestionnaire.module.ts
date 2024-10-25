import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionnaireComponent } from './gestionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GestionnaireAcceuilComponent } from './gestionnaire-acceuil/gestionnaire-acceuil.component';
import { GestionnaireModulesComponent } from './gestionnaire-modules/gestionnaire-modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionnaireCoursComponent } from './gestionnaire-cours/gestionnaire-cours.component';

import { GestionnaireCertificatComponent } from './gestionnaire-certificat/gestionnaire-certificat.component';
import { GestionnaireCertificatCoursComponent } from './gestionnaire-certificat-cours/gestionnaire-certificat-cours.component';
import { GestionnaireDomaineComponent } from './gestionnaire-domaine/gestionnaire-domaine.component';
import { GestionnaireChapitreComponent } from './gestionnaire-chapitre/gestionnaire-chapitre.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GestionnaireModifierContenuCoursComponent } from './gestionnaire-modifier-contenu-cours/gestionnaire-modifier-contenu-cours.component';


@NgModule({
  declarations: [GestionnaireComponent, GestionnaireAcceuilComponent, GestionnaireModulesComponent, GestionnaireCoursComponent, GestionnaireCertificatComponent, GestionnaireCertificatCoursComponent, GestionnaireDomaineComponent, GestionnaireChapitreComponent, GestionnaireModifierContenuCoursComponent],
  imports: [
    CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule,CKEditorModule,FormsModule
  ]
})
export class GestionnaireModule { }
