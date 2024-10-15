import { SiteFormation } from "./siteformationModel";
import { Stage } from "./stageModel";
import { Encadrant, Gestionnaire, Recruteur } from "./userModel";

export interface Entreprise {
    id: number;
    nom: string;
    secteur: string;
    adresse: string;
    site_web: string;
    contact_email: string;
    contact_telephone: string;
    gestionnaires: Gestionnaire[];
    encadrands: Encadrant[];
    recruteurs: Recruteur[];
    siteformations: SiteFormation[];
    stages: Stage[];
  }