// export interface Seance {
//     lieu: string;
//     formateurs: string[];
//     date: string;
//     heure: string;
//     statut: 'Confirmé' | 'En attente' | 'Annulé';
//   }

export interface Seance {
  id: number;
  module_id: number;
  date: Date;
  heure: Date;
  statut: 'Confirmé' | 'En attente' | 'Annulé';
}