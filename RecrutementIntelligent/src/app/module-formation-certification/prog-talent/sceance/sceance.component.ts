import { Component } from '@angular/core';

@Component({
  selector: 'app-sceance',
  templateUrl: './sceance.component.html',
  styleUrls: ['./sceance.component.css']
})
export class SceanceComponent {

  // Les séances
  seances = [
    {
      lieu: 'Salle A',
      formateurs: ['Dr. Diallo'],
      date: '2024-10-05',
      heure: '09h00 - 12h00',
      statut: 'Confirmé',
      module_id: 1,
    },
    {
      lieu: 'Salle A',
      formateurs: ['Dr. Diallo', 'M. Kone'],
      date: '2024-10-07',
      heure: '09h00 - 12h00',
      statut: 'Confirmé',
      module_id: 1,
    },
    {
      lieu: 'Salle B',
      formateurs: ['Mme. Ouédraogo'],
      date: '2024-10-10',
      heure: '14h00 - 17h00',
      statut: 'Confirmé',
      module_id: 2,
    },
    {
      lieu: 'Salle C',
      formateurs: ['M. Kaboré', 'Mme. Ouédraogo'],
      date: '2024-10-09',
      heure: '10h00 - 13h00',
      statut: 'Confirmé',
      module_id: 3,
    },
    {
      lieu: 'Salle D',
      formateurs: ['M. Traoré'],
      date: '2024-10-12',
      heure: '09h00 - 12h00',
      statut: 'En attente',
      module_id: 4,
    },
    {
      lieu: 'Salle E',
      formateurs: ['Mme. Sawadogo', 'Dr. Ouédraogo'],
      date: '2024-10-14',
      heure: '14h00 - 17h00',
      statut: 'Confirmé',
      module_id: 5,
    },
    {
      lieu: 'Salle F',
      formateurs: ['M. Zongo'],
      date: '2024-10-16',
      heure: '09h00 - 12h00',
      statut: 'Confirmé',
      module_id: 6,
    },
    {
      lieu: 'Salle G',
      formateurs: ['Dr. Kafando'],
      date: '2024-10-18',
      heure: '10h00 - 13h00',
      statut: 'En attente',
      module_id: 7,
    },
    {
      lieu: 'Salle H',
      formateurs: ['Mme. Traoré'],
      date: '2024-10-20',
      heure: '14h00 - 17h00',
      statut: 'Confirmé',
      module_id: 8,
    },
    {
      lieu: 'Salle I',
      formateurs: ['M. Tapsoba', 'Dr. Ouédraogo'],
      date: '2024-10-22',
      heure: '09h00 - 12h00',
      statut: 'Confirmé',
      module_id: 9,
    },
    {
      lieu: 'Salle J',
      formateurs: ['Dr. Kouyaté'],
      date: '2024-10-25',
      heure: '10h00 - 13h00',
      statut: 'En attente',
      module_id: 10,
    },
      
  ];

  // Modules
  modules = [
    {
      nom: 'Introduction à la Programmation',
    },
    {
      nom: 'Gestion de Projets',
    },
    {
      nom: 'Analyse Financière',
    },
    {
      nom: 'Marketing Digital',
    },
    {
      nom: 'Développement Web',
    },
    {
      nom: 'Gestion des Ressources Humaines',
    },
    {
      nom: 'Statistiques Appliquées',
    },
    {
      nom: 'Finances Internationales',
    },
    {
      nom: 'Langages de Programmation',
    },
    {
      nom: 'Economie Numérique',
    }
  ];
  
}
