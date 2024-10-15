

import { AffectationFormation } from "./affectation";
import { Seance } from "./seanceModel";
import { Stage } from "./stageModel";

  export interface Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    role: 'etudiant' | 'gestionnaire' | 'encadrant' | 'recruteur';
  }
  
  export interface Etudiant extends Utilisateur {
    ecole: string;
    filiere: string;
    niveau_etudes: string;
    classement: number;
    profil_competence: string;
    stages: Stage[];
    affectations: AffectationFormation[];
  }
  
  export interface Gestionnaire extends Utilisateur {
    poste: string;
    annee_embauche: number;
  }
  
  export interface Encadrant extends Utilisateur {
    specialite: string;
    annee_experience: number;
    formations_realisees: number[];
    niveau_etudes: string;
    statut: 'actif' | 'inactif';
    seance: Seance[];
  }
  
  export interface Recruteur extends Utilisateur {}
  