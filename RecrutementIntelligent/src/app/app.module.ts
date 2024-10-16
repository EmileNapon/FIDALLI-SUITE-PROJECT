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
import { CardModuleComponent } from './module-formation-certification/domaines-listes/domaines.component';
import { GestionnaireModule } from './gestionnaire/gestionnaire.module';
import { Footer } from './header-footer/footer/footer';
import{HeaderPrincipaleComponent} from './header-footer/header-principal/headerPrincipale';
import { HeaderGestionnaireComponent } from './header-footer/header-gestionnaire/header-gestionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,PremiumEtudiantComponent, HeaderPrincipaleComponent, HeaderGestionnaireComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, GestionUtilisateursModule, OrientationsModule, ModuleFormationCertificationModule, GestionnaireModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
