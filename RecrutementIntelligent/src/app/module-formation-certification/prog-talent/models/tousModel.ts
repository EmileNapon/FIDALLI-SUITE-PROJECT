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
    stages_id?: number;      // Ajout optionnel pour les stages
    affectation_id?: number; // Ajout optionnel pour les affectations
}

export interface Gestionnaire extends Utilisateur {
    poste: string;
    annee_embauche: number;
}

export interface Encadrant extends Utilisateur {
    specialite: string;
    annee_experience: number;
    niveau_etudes: string;
    statut: string;
    seance_id?: number; // Ajout optionnel pour les séances
}

export interface Recruteur extends Utilisateur {}

export interface Formation {
    id: number;
    titre: string;
    type: string;
    domainesEligibles: string;
    niveauRequis: string;
    prix: string;
    duree: string;
    nombrePlaces: string;
    localisation: string;
    resume: string;
    description: string;
}

export interface SousGroupe {
    id: number;
    nom: string;
    description: string;
}

export interface SousGroupe {
    id: number;
    nom: string;
    description: string;
}

export interface Module {
    id: number;
    nom: string;
    description: string;
    code: string;
    formation_id: number; // Clé de formation migrée ici
}

export interface Seance {
    id: number;
    lieu: string;
    formateur: String;
    date: Date;
    heure_debut: string;
    heure_fin: string;
    statut: 'Confirmé' | 'En attente' | 'Annulé';
    module_id: number;
}

export interface SiteFormation {
    id: number;
    nom: string;
    adresse: string;
    description: string;
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

export interface Affectation {
    id: number;
    date_affectation: string;
    etudiant_id: number;
    formation_id: number;
}
