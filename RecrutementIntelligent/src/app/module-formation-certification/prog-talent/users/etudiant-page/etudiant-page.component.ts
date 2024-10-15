import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-etudiant-page',
  templateUrl: './etudiant-page.component.html',
  styleUrls: ['./etudiant-page.component.css']
})
export class EtudiantPageComponent {
  
  showAnnonce!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;
  
  ngOnInit():void{
    this.showAnnonce = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }

  // Déclaration d'une liste d'étudiants
  cohort = [
    { nomComplet: 'Abdoulaye Traoré', ecole: 'Université de Ouagadougou', filiere: 'Informatique', email: 'a.traore@mail.com', contact: '+226 70 12 34 56' },
    { nomComplet: 'Aminata Ouédraogo', ecole: 'École Supérieure Polytechnique', filiere: 'Gestion des Ressources Humaines', email: 'a.ouedraogo@mail.com', contact: '+226 75 67 89 10' },
    { nomComplet: 'Mohamed Zongo', ecole: 'Université Aube Nouvelle', filiere: 'Marketing', email: 'm.zongo@mail.com', contact: '+226 71 23 45 67' },
    { nomComplet: 'Fatimata Diallo', ecole: 'Institut des Sciences et Tech', filiere: 'Génie Civil', email: 'f.diallo@mail.com', contact: '+226 72 89 12 34' },
    { nomComplet: 'Adama Sawadogo', ecole: 'Université de Koudougou', filiere: 'Informatique', email: 'a.sawadogo@mail.com', contact: '+226 73 56 78 90' },
    { nomComplet: 'Salif Kaboré', ecole: 'Institut Supérieur des Affaires', filiere: 'Finance', email: 's.kabore@mail.com', contact: '+226 74 12 34 56' },
    { nomComplet: 'Mariam Compaoré', ecole: 'Université de Bobo-Dioulasso', filiere: 'Droit', email: 'm.compaore@mail.com', contact: '+226 70 90 23 45' },
    { nomComplet: 'Hamidou Ouattara', ecole: 'École Nationale d\'Administration', filiere: 'Administration Publique', email: 'h.ouattara@mail.com', contact: '+226 71 56 78 90' },
    { nomComplet: 'Pauline Kouadio', ecole: 'Université Catholique de l\'Afrique de l\'Ouest', filiere: 'Psychologie', email: 'p.kouadio@mail.com', contact: '+226 75 67 89 01' },
    { nomComplet: 'Ismael Diakité', ecole: 'Université de Ouagadougou', filiere: 'Économie', email: 'i.diakite@mail.com', contact: '+226 74 12 34 89' }
  ];

  modules = [
    {
      nom: 'Introduction à la Programmation',
      seances: [
        {
          lieu: 'Salle A',
          formateurs: ['Dr. Diallo'],
          date: '2024-10-05',
          heure: '09h00 - 12h00',
          statut: 'Confirmé'
        },
        {
          lieu: 'Salle A',
          formateurs: ['Dr. Diallo', 'M. Kone'],
          date: '2024-10-07',
          heure: '09h00 - 12h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Gestion de Projets',
      seances: [
        {
          lieu: 'Salle B',
          formateurs: ['Mme. Ouédraogo'],
          date: '2024-10-10',
          heure: '14h00 - 17h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Analyse Financière',
      seances: [
        {
          lieu: 'Salle C',
          formateurs: ['M. Kaboré', 'Mme. Ouédraogo'],
          date: '2024-10-09',
          heure: '10h00 - 13h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Marketing Digital',
      seances: [
        {
          lieu: 'Salle D',
          formateurs: ['M. Traoré'],
          date: '2024-10-12',
          heure: '09h00 - 12h00',
          statut: 'En attente'
        }
      ]
    },
    {
      nom: 'Développement Web',
      seances: [
        {
          lieu: 'Salle E',
          formateurs: ['Mme. Sawadogo', 'Dr. Ouédraogo'],
          date: '2024-10-14',
          heure: '14h00 - 17h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Gestion des Ressources Humaines',
      seances: [
        {
          lieu: 'Salle F',
          formateurs: ['M. Zongo'],
          date: '2024-10-16',
          heure: '09h00 - 12h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Statistiques Appliquées',
      seances: [
        {
          lieu: 'Salle G',
          formateurs: ['Dr. Kafando'],
          date: '2024-10-18',
          heure: '10h00 - 13h00',
          statut: 'En attente'
        }
      ]
    },
    {
      nom: 'Finances Internationales',
      seances: [
        {
          lieu: 'Salle H',
          formateurs: ['Mme. Traoré'],
          date: '2024-10-20',
          heure: '14h00 - 17h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Langages de Programmation',
      seances: [
        {
          lieu: 'Salle I',
          formateurs: ['M. Tapsoba', 'Dr. Ouédraogo'],
          date: '2024-10-22',
          heure: '09h00 - 12h00',
          statut: 'Confirmé'
        }
      ]
    },
    {
      nom: 'Economie Numérique',
      seances: [
        {
          lieu: 'Salle J',
          formateurs: ['Dr. Kouyaté'],
          date: '2024-10-25',
          heure: '10h00 - 13h00',
          statut: 'En attente'
        }
      ]
    }
  ];

  // les groupe des participants
  getGroupes() {
    const groupes = [];
    for (let i = 0; i < this.cohort.length; i += 3) {
        groupes.push(this.cohort.slice(i, i + 3));
    }
    return groupes;
}

}
