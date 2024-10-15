import { Formation } from "./formationModel";
import { Seance } from "./seanceModel";

export interface SiteFormation {
    id: number;
    nom: string;
    adresse: string;
    description: string;
    formations: Formation[];
    seances: Seance[];
  }