import { Etudiant } from "./userModel";

export interface Stage {
    id: number;
    poste: string;
    description: string;
    date_debut: Date;
    date_fin: Date;
    statut: 'disponible' | 'attribué';
    etudiant: Etudiant[];
  }