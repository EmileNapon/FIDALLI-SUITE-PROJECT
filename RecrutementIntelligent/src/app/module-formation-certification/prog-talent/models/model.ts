
export interface Etudiant {
    id: number;
    nom_complet: string;
    email: string;
    telephone: string;
    ecole: string;
    niveau_etudes: string;
    classement: number;
    profil_competence: string;
    sous_groupe_id: number;  // FK vers SousGroupes
    stage_id?: number;  // FK vers Stages
  }

  export interface Formation {
    id: number;
    nom: string;
    description: string;
    duree: string;  // Exemple: "1 mois"
    site_formation_id: number;  // FK vers SitesFormation
    gestionnaire_id: number;  // FK vers Gestionnaires
  }

  export interface SousGroupe {
    id: number;
    nom: string;
    description: string;
    formation_id: number;  // FK vers Formations
    gestionnaire_id: number;  // FK vers Gestionnaires
  }

  export interface Module {
    id: number;
    nom: string;
    description: string;
    code: string;
    formation_id: number;  // FK vers Formations
  }

  export interface Seance {
    id: number;
    module_id: number;  // FK vers Modules
    date_debut: Date;
    date_fin: Date;
    site_formation_id: number;  // FK vers SitesFormation
    encadrant_id: number;  // FK vers Encadrants
  }

  export interface Encadrant {
    id: number;
    nom_complet: string;
    email: string;
    telephone: string;
    entreprise_id: number;  // FK vers Entreprises
  }

  export interface SiteFormation {
    id: number;
    nom: string;
    adresse: string;
    description: string;
    entreprise_id: number;  // FK vers Entreprises
  }

  export interface Entreprise {
    id: number;
    nom: string;
    secteur: string;
    adresse: string;
    site_web: string;
    contact_email: string;
    contact_telephone: string;
  }

  export interface Stage {
    id: number;
    poste: string;
    description: string;
    date_debut: Date;
    date_fin: Date;
    entreprise_id: number;  // FK vers Entreprises
    etudiant_id: number;  // FK vers Étudiants
    statut: 'disponible' | 'attribué';  // Exemple de statut
  }

  
  export interface Gestionnaire {
    id: number;
    nom_complet: string;
    email: string;
    telephone: string;
    entreprise_id: number;  // FK vers Entreprises
  }

  export interface Recruteur {
    id: number;
    nom_complet: string;
    email: string;
    telephone: string;
    entreprise_id: number;  // FK vers Entreprises
  }

  export interface AffectationFormation {
    id: number;
    etudiant_id: number;  // FK vers Étudiants
    module_id: number;  // FK vers Modules
    sous_groupe_id: number;  // FK vers SousGroupes
    date_affectation: Date;
  }

  // Utilisateurs avec héritage

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
    poste: string;             // Nouvelle propriété ajoutée
    annee_embauche: number;    // Nouvelle propriété ajoutée
  }
    
  export interface Encadrant extends Utilisateur {
    specialite: string;        // Nouvelle propriété ajoutée
    annee_experience: number;  // Nouvelle propriété ajoutée
    // formations_realisees: number[];
    niveau_etudes: string;     // Nouvelle propriété ajoutée
    statut: 'actif' | 'inactif'; // Nouvelle propriété ajoutée
    seance: Seance[];
  }  
  
  export interface Recruteur extends Utilisateur {
  }


  export interface Formation {
    id: number;
    type: string;
    domainesEligibles: string;
    niveauRequis: string;
    prix: string;
    duree: string;  // Exemple: "1 mois"
    nombrePlaces: string;
    localisation: string;
    resume: string;
    description: string;
    modules: Module[];
  }

  export interface SousGroupe {
    id: number;
    nom: string;
    description: string;
    etudiant: Etudiant[];
    affectations: AffectationFormation[];
  }

  export interface Module {
    id: number;
    nom: string;
    description: string;
    code: string;
    affectations: AffectationFormation[];
  }

  export interface Seance {
    id: number;
    module_id: number;  // FK vers Modules
    date: Date;
    heure: Date;
    statut: 'Confirmé' | 'En attente' | 'Annulé';
  }

  export interface SiteFormation {
    id: number;
    nom: string;
    adresse: string;
    description: string;
    formations: Formation[];
    seances: Seance[];
  }

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

  export interface Stage {
    id: number;
    poste: string;
    description: string;
    date_debut: Date;
    date_fin: Date;
    statut: 'disponible' | 'attribué';  // Exemple de statut
    etudiant: Etudiant[];
  }

  export interface AffectationFormation {
    id: number;
    date_affectation: Date;
  }
  