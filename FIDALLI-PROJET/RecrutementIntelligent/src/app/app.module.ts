import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ModuleFormationCertificationModule } from './module-formation-certification/module-formation-certification.module';
import { RouterModule } from '@angular/router';
import { PremiumEtudiantComponent } from './gestion-abonnements-premium/premium-etudiant/premium-etudiant.component';
import { GestionUtilisateursModule } from './gestion-utilisateurs/gestion-utilisateurs.module';
import { AcceuilFormationComponent } from './module-formation-certification/acceuil-formation/acceuil-formation.component';
import { OrientationAcceuilComponent } from './orientations/orientation-acceuil/orientation-acceuil.component';
import { EtablissementsComponent } from './orientations/etablissements/etablissements.component';
import { OrientationsModule } from './orientations/orientations.module';
<<<<<<< HEAD
=======
import { CardModuleComponent } from './module-formation-certification/domaines-listes/domaines.component';
import { GestionnaireModule } from './gestionnaire/gestionnaire.module';
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AcceuilComponent,PremiumEtudiantComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, GestionUtilisateursModule, OrientationsModule, ModuleFormationCertificationModule
=======
    AcceuilComponent,PremiumEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, GestionUtilisateursModule, OrientationsModule, ModuleFormationCertificationModule, GestionnaireModule, 
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
