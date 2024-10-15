import { AffectationFormation } from "./affectation";

export interface Module {
  id: number;
  nom: string;
  description: string;
  code: string;
  affectations: AffectationFormation[];
}
  