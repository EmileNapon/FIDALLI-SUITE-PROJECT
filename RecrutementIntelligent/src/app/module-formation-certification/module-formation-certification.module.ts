import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { ModuleFormationCertificationComponent } from './module-formation-certification.component';
import { ContenuLibreComponent } from './contenu-libre/contenu-libre.component';
import { CertificationComponent } from './certification/certification.component';

import { CoursComponent } from './cours/cours.component';
import { AcceuilFormationComponent } from './acceuil-formation/acceuil-formation.component';
import { ModuleComponent } from './domaines-listes/domaines.component';



import { CertificationContenuComponent } from './certification-contenu/certification-contenu.component';
import { certificationContenuParcours1Component } from './certification-contenu_etape_1/certificationContenuEtape';


import { HeaderFormationComponent } from '../header-footer/header-formation/header-formation.component';
import { WebinarComponent } from './webinar/components/webinar/webinar.component';
import { WebinarListComponent } from './webinar/components/webinar-list/webinar-list.component';
import { WebinarDetailsComponent } from './webinar/components/webinar-details/webinar-details.component';
import { WebinarEnrollComponent } from './webinar/components/webinar-enrollment/webinar-enrollment.component';
import { WebinarManagementComponent } from './webinar/components/webinar-management/webinar-management.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { AjoutAnnonceComponent } from './prog-talent/annonce/ajout-annonce/ajout-annonce.component';
import { AnnonceComponent } from './prog-talent/annonce/annonce.component';
import { ModificationAnnonceComponent } from './prog-talent/annonce/modification-annonce/modification-annonce.component';
import { AjoutEncadrantComponent } from './prog-talent/encadrant/ajout-encadrant/ajout-encadrant.component';
import { EncadrantComponent } from './prog-talent/encadrant/encadrant.component';
import { ModifEncadrantComponent } from './prog-talent/encadrant/modif-encadrant/modif-encadrant.component';
import { EtudiantComponent } from './prog-talent/etudiant/etudiant.component';
import { FooterComponent } from './prog-talent/footer/footer.component';
import { AjoutFormationComponent } from './prog-talent/formation/ajout-formation/ajout-formation.component';
import { FormationDetailComponent } from './prog-talent/formation/formation-detail/formation-detail.component';
import { FormationComponent } from './prog-talent/formation/formation.component';
import { ModificationFormationComponent } from './prog-talent/formation/modification-formation/modification-formation.component';
import { GroupeEtudiantComponent } from './prog-talent/groupe-etudiant/groupe-etudiant.component';
import { HeaderComponent } from './prog-talent/header/header.component';
import { CreateModuleComponent } from './prog-talent/module/create-module/create-module.component';
import { ModificationModuleComponent } from './prog-talent/module/modification-module/modification-module.component';
import { ProgTalentComponent } from './prog-talent/prog-talent.component';
import { AjoutSeanceComponent } from './prog-talent/seance/ajout-seance/ajout-seance.component';
import { ModificationSeanceComponent } from './prog-talent/seance/modification-seance/modification-seance.component';
import { EtudiantPageComponent } from './prog-talent/users/etudiant-page/etudiant-page.component';
import { FormateurPageComponent } from './prog-talent/users/formateur-page/formateur-page.component';
import { GestionnairePageComponent } from './prog-talent/users/gestionnaire-page/gestionnaire-page.component';
import { InscriptionPragraTalentComponent } from './prog-talent/formation/formation-detail/inscription-pragra-talent/inscription-pragra-talent.component';


@NgModule({
  declarations: [
    ModuleFormationCertificationComponent,
    ContenuLibreComponent,
    CertificationComponent,

    CoursComponent,
    AcceuilFormationComponent, ModuleComponent, 
    CertificationContenuComponent,
    certificationContenuParcours1Component,
    HeaderFormationComponent,WebinarComponent,
    WebinarListComponent,
    WebinarDetailsComponent,
    WebinarEnrollComponent,
    WebinarManagementComponent,
    ChapitreComponent,
    

  ProgTalentComponent, EtudiantPageComponent, GestionnairePageComponent, FormateurPageComponent, FormationComponent, ModuleComponent, FooterComponent, HeaderComponent, AnnonceComponent, EtudiantComponent, EncadrantComponent, ModifEncadrantComponent, AjoutFormationComponent, ModificationFormationComponent, CreateModuleComponent, ModificationModuleComponent, AjoutSeanceComponent, ModificationSeanceComponent, AjoutAnnonceComponent, ModificationAnnonceComponent, AjoutEncadrantComponent, GroupeEtudiantComponent, FormationDetailComponent, InscriptionPragraTalentComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,  HttpClientModule, RouterModule, FormsModule,ReactiveFormsModule, 
  ]
})
export class ModuleFormationCertificationModule { }
