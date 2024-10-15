import { Module } from "./moduleModel";

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
    modules: Module[];
  }