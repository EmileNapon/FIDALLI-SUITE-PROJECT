import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionnaireComponent } from './gestionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GestionnaireAcceuilComponent } from './gestionnaire-acceuil/gestionnaire-acceuil.component';
import { GestionnaireModulesComponent } from './gestionnaire-modules/gestionnaire-modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionnaireCoursComponent } from './gestionnaire-cours/gestionnaire-cours.component';
import { GestionnaireContenuCoursComponent } from './gestionnaire-contenu-cours/gestionnaire-contenu-cours.component';
import { GestionnaireCertificatComponent } from './gestionnaire-certificat/gestionnaire-certificat.component';
import { GestionnaireCertificatCoursComponent } from './gestionnaire-certificat-cours/gestionnaire-certificat-cours.component';



@NgModule({
  declarations: [GestionnaireComponent, GestionnaireAcceuilComponent, GestionnaireModulesComponent, GestionnaireCoursComponent, GestionnaireContenuCoursComponent, GestionnaireCertificatComponent, GestionnaireCertificatCoursComponent],
  imports: [
    CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule
  ]
})
export class GestionnaireModule { }
