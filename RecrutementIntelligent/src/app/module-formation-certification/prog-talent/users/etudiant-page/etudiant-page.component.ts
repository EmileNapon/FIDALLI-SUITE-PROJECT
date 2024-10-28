import { Component, HostListener } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-etudiant-page',
  templateUrl: './etudiant-page.component.html',
  styleUrls: ['./etudiant-page.component.css']
})
export class EtudiantPageComponent {
  
  showAnnonce!: boolean;
  showFormation!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;


  constructor(private utilisateurService: UtilisateurService) { }
  
  ngOnInit():void{
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;

    // this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
    //   this.utilisateurs = data;
    // });

    // this.utilisateurService.getEtudiants().subscribe((data: Etudiant[]) => {
    //   this.etudiants = data;
    // });
    // this.utilisateurService.getEncadrants().subscribe((data: Encadrant[]) => {
    //   this.encadrants = data;
    // });
  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowFormation(){
    this.showAnnonce = false;
    this.showFormation = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }
  

  // utilisateurs: Utilisateur[] = [
  //   { id: 1, nom: 'Traoré', prenom: 'Abdoulaye', email: 'a.traore@mail.com', telephone: '+226 70 12 34 56', role: 'etudiant' },
  //   { id: 2, nom: 'Ouédraogo', prenom: 'Aminata', email: 'a.ouedraogo@mail.com', telephone: '+226 75 67 89 10', role: 'gestionnaire'},
  //   { id: 3, nom: 'Zongo', prenom: 'Mohamed', email: 'm.zongo@mail.com', telephone: '+226 71 23 45 67', role: 'encadrant' },
  //   { id: 4, nom: 'Diallo', prenom: 'Fatimata', email: 'f.diallo@mail.com', telephone: '+226 72 89 12 34', role: 'recruteur' },
  // ];

  

  

  // utilisateurs: (Etudiant | Gestionnaire | Encadrant | Recruteur)[] = [
  //   {
  //     id: 1,
  //     nom: 'Traoré',
  //     prenom: 'Abdoulaye',
  //     email: 'a.traore@mail.com',
  //     telephone: '+226 70 12 34 56',
  //     role: 'etudiant',
  //     ecole: 'Université A',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Informatique',
  //     classement: 1,
  //     profil_competence: 'Développement Web',
  //     sous_groupe_id: 1,
  //   },
  //   {
  //     id: 2,
  //     nom: 'Ouédraogo',
  //     prenom: 'Aminata',
  //     email: 'a.ouedraogo@mail.com',
  //     telephone: '+226 75 67 89 10',
  //     role: 'etudiant',
  //     ecole: 'Université B',
  //     niveau_etudes: 'Master',
  //     filiere: 'Ressources Humaines',
  //     classement: 2,
  //     profil_competence: 'Gestion',
  //     sous_groupe_id: 1,
  //   },
  //   {
  //     id: 3,
  //     nom: 'Zongo',
  //     prenom: 'Mohamed',
  //     email: 'm.zongo@mail.com',
  //     telephone: '+226 71 23 45 67',
  //     role: 'etudiant',
  //     ecole: 'Université C',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Marketing',
  //     classement: 3,
  //     profil_competence: 'Marketing Digital',
  //     sous_groupe_id: 2,
  //   },
  //   {
  //     id: 4,
  //     nom: 'Diallo',
  //     prenom: 'Fatimata',
  //     email: 'f.diallo@mail.com',
  //     telephone: '+226 72 89 12 34',
  //     role: 'etudiant',
  //     ecole: 'Université D',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Génie Civil',
  //     classement: 4,
  //     profil_competence: 'BTP',
  //     sous_groupe_id: 2,
  //   },
  //   {
  //     id: 5,
  //     nom: 'Sawadogo',
  //     prenom: 'Adama',
  //     email: 'a.sawadogo@mail.com',
  //     telephone: '+226 73 56 78 90',
  //     role: 'etudiant',
  //     ecole: 'Université E',
  //     niveau_etudes: 'Master',
  //     filiere: 'Informatique',
  //     classement: 5,
  //     profil_competence: 'Développement Logiciel',
  //     sous_groupe_id: 3,
  //   },
  //   {
  //     id: 6,
  //     nom: 'Kaboré',
  //     prenom: 'Salif',
  //     email: 's.kabore@mail.com',
  //     telephone: '+226 74 12 34 56',
  //     role: 'etudiant',
  //     ecole: 'Université F',
  //     niveau_etudes: 'Master',
  //     filiere: 'Finance',
  //     classement: 6,
  //     profil_competence: 'Comptabilité',
  //     sous_groupe_id: 3,
  //   },
  //   {
  //     id: 7,
  //     nom: 'Compaoré',
  //     prenom: 'Mariam',
  //     email: 'm.compaore@mail.com',
  //     telephone: '+226 70 90 23 45',
  //     role: 'etudiant',
  //     ecole: 'Université G',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Droit',
  //     classement: 7,
  //     profil_competence: 'Droit des affaires',
  //     sous_groupe_id: 4,
  //   },
  //   {
  //     id: 8,
  //     nom: 'Ouattara',
  //     prenom: 'Hamidou',
  //     email: 'h.ouattara@mail.com',
  //     telephone: '+226 71 56 78 90',
  //     role: 'etudiant',
  //     ecole: 'Université H',
  //     niveau_etudes: 'Master',
  //     filiere: 'Administration Publique',
  //     classement: 8,
  //     profil_competence: 'Gestion Publique',
  //     sous_groupe_id: 4,
  //   },
  //   {
  //     id: 9,
  //     nom: 'Kouadio',
  //     prenom: 'Pauline',
  //     email: 'p.kouadio@mail.com',
  //     telephone: '+226 75 67 89 01',
  //     role: 'etudiant',
  //     ecole: 'Université I',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Psychologie',
  //     classement: 9,
  //     profil_competence: 'Psychologie Sociale',
  //     sous_groupe_id: 5,
  //   },
  //   {
  //     id: 10,
  //     nom: 'Diakité',
  //     prenom: 'Ismael',
  //     email: 'i.diakite@mail.com',
  //     telephone: '+226 74 12 34 89',
  //     role: 'etudiant',
  //     ecole: 'Université J',
  //     niveau_etudes: 'Licence',
  //     filiere: 'Économie',
  //     classement: 10,
  //     profil_competence: 'Économie Internationale',
  //     sous_groupe_id: 5,
  //   },
  //   {
  //     id: 11,
  //     nom: 'Ouédraogo',
  //     prenom: 'Aminata',
  //     email: 'a.ouedraogo@mail.com',
  //     telephone: '+226 75 67 89 10',
  //     role: 'gestionnaire',
  //     entreprise_id: 1,
  //     poste: 'Responsable Formation',
  //     annee_embauche: 2018
  //   },
  //   {
  //     id: 12,
  //     nom: 'Zongo',
  //     prenom: 'Mohamed',
  //     email: 'm.zongo@mail.com',
  //     telephone: '+226 71 23 45 67',
  //     role: 'encadrant',
  //     entreprise_id: 2,
  //     specialite: 'Informatique',
  //     annee_experience: 5,
  //     formations_realisees: [101, 102],
  //     niveau_etudes: 'Master',
  //     statut: 'actif'
  //   },
  //   {
  //     id: 13,
  //     nom: 'Diallo',
  //     prenom: 'Fatimata',
  //     email: 'f.diallo@mail.com',
  //     telephone: '+226 72 89 12 34',
  //     role: 'recruteur',
  //     entreprise_id: 3
  //   }
  // ];

  // Méthode pour filtrer les étudiants
  // getEtudiants(): Etudiant[] {
  //   return this.utilisateurs.filter(user => user.role === 'etudiant') as Etudiant[];
  // }

  // getGestionnaires(): Gestionnaire[] {
  //   return this.utilisateurs.filter(user => user.role === 'gestionnaire') as Gestionnaire[];
  // }

  // getEncadrants(): Encadrant[] {
  //   return this.utilisateurs.filter(user => user.role === 'encadrant') as Encadrant[];
  // }

  // getRecruteurs(): Recruteur[] {
  //   return this.utilisateurs.filter(user => user.role === 'recruteur') as Recruteur[];
  // }

  // Déclaration d'une liste d'étudiants
  // cohort = [
  //   { nomComplet: 'Abdoulaye Traoré', ecole: 'Université de Ouagadougou', filiere: 'Informatique', email: 'a.traore@mail.com', contact: '+226 70 12 34 56' },
  //   { nomComplet: 'Aminata Ouédraogo', ecole: 'École Supérieure Polytechnique', filiere: 'Gestion des Ressources Humaines', email: 'a.ouedraogo@mail.com', contact: '+226 75 67 89 10' },
  //   { nomComplet: 'Mohamed Zongo', ecole: 'Université Aube Nouvelle', filiere: 'Marketing', email: 'm.zongo@mail.com', contact: '+226 71 23 45 67' },
  //   { nomComplet: 'Fatimata Diallo', ecole: 'Institut des Sciences et Tech', filiere: 'Génie Civil', email: 'f.diallo@mail.com', contact: '+226 72 89 12 34' },
  //   { nomComplet: 'Adama Sawadogo', ecole: 'Université de Koudougou', filiere: 'Informatique', email: 'a.sawadogo@mail.com', contact: '+226 73 56 78 90' },
  //   { nomComplet: 'Salif Kaboré', ecole: 'Institut Supérieur des Affaires', filiere: 'Finance', email: 's.kabore@mail.com', contact: '+226 74 12 34 56' },
  //   { nomComplet: 'Mariam Compaoré', ecole: 'Université de Bobo-Dioulasso', filiere: 'Droit', email: 'm.compaore@mail.com', contact: '+226 70 90 23 45' },
  //   { nomComplet: 'Hamidou Ouattara', ecole: 'École Nationale d\'Administration', filiere: 'Administration Publique', email: 'h.ouattara@mail.com', contact: '+226 71 56 78 90' },
  //   { nomComplet: 'Pauline Kouadio', ecole: 'Université Catholique de l\'Afrique de l\'Ouest', filiere: 'Psychologie', email: 'p.kouadio@mail.com', contact: '+226 75 67 89 01' },
  //   { nomComplet: 'Ismael Diakité', ecole: 'Université de Ouagadougou', filiere: 'Économie', email: 'i.diakite@mail.com', contact: '+226 74 12 34 89' }
  // ];

  // Déclaration de la liste des formateurs
  // formateurs = [
  //   {
  //     id: 1,
  //     nom: 'Traoré',
  //     prenom: 'Abdoulaye',
  //     email: 'a.traore@mail.com',
  //     telephone: '+226 70 12 34 56',
  //     specialite: 'Informatique',
  //     annee_experience: 5,
  //     formations_realisees: [101, 102],
  //     date_recrutement: '2020-03-15',
  //     niveau_etudes: 'Master',
  //     statut: 'actif',
  //   },
  //   {
  //     id: 2,
  //     nom: 'Ouédraogo',
  //     prenom: 'Aminata',
  //     email: 'a.ouedraogo@mail.com',
  //     telephone: '+226 75 67 89 10',
  //     specialite: 'Ressources Humaines',
  //     annee_experience: 7,
  //     formations_realisees: [103, 104],
  //     date_recrutement: '2018-05-22',
  //     niveau_etudes: 'Doctorat',
  //     statut: 'actif',
  //   },
  //   {
  //     id: 3,
  //     nom: 'Zongo',
  //     prenom: 'Mohamed',
  //     email: 'm.zongo@mail.com',
  //     telephone: '+226 71 23 45 67',
  //     specialite: 'Marketing',
  //     annee_experience: 3,
  //     formations_realisees: [105],
  //     date_recrutement: '2021-01-10',
  //     niveau_etudes: 'Licence',
  //     statut: 'actif',
  //   },
  //   {
  //     id: 4,
  //     nom: 'Diallo',
  //     prenom: 'Fatimata',
  //     email: 'f.diallo@mail.com',
  //     telephone: '+226 72 89 12 34',
  //     specialite: 'Génie Civil',
  //     annee_experience: 10,
  //     formations_realisees: [106, 107, 108],
  //     date_recrutement: '2015-09-05',
  //     niveau_etudes: 'Master',
  //     statut: 'actif',
  //   },
  //   {
  //     id: 5,
  //     nom: 'Sawadogo',
  //     prenom: 'Adama',
  //     email: 'a.sawadogo@mail.com',
  //     telephone: '+226 73 56 78 90',
  //     specialite: 'Informatique',
  //     annee_experience: 8,
  //     formations_realisees: [109, 110],
  //     date_recrutement: '2017-07-12',
  //     niveau_etudes: 'Master',
  //     statut: 'inactif',
  //   }
  // ];
  
  // les modules et les séances
  // modules = [
  //   {
  //     nom: 'Introduction à la Programmation',
  //     seances: [
  //       {
  //         lieu: 'Salle A',
  //         formateurs: ['Dr. Diallo'],
  //         date: '2024-10-05',
  //         heure: '09h00 - 12h00',
  //         statut: 'Confirmé'
  //       },
  //       {
  //         lieu: 'Salle A',
  //         formateurs: ['Dr. Diallo', 'M. Kone'],
  //         date: '2024-10-07',
  //         heure: '09h00 - 12h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Gestion de Projets',
  //     seances: [
  //       {
  //         lieu: 'Salle B',
  //         formateurs: ['Mme. Ouédraogo'],
  //         date: '2024-10-10',
  //         heure: '14h00 - 17h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Analyse Financière',
  //     seances: [
  //       {
  //         lieu: 'Salle C',
  //         formateurs: ['M. Kaboré', 'Mme. Ouédraogo'],
  //         date: '2024-10-09',
  //         heure: '10h00 - 13h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Marketing Digital',
  //     seances: [
  //       {
  //         lieu: 'Salle D',
  //         formateurs: ['M. Traoré'],
  //         date: '2024-10-12',
  //         heure: '09h00 - 12h00',
  //         statut: 'En attente'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Développement Web',
  //     seances: [
  //       {
  //         lieu: 'Salle E',
  //         formateurs: ['Mme. Sawadogo', 'Dr. Ouédraogo'],
  //         date: '2024-10-14',
  //         heure: '14h00 - 17h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Gestion des Ressources Humaines',
  //     seances: [
  //       {
  //         lieu: 'Salle F',
  //         formateurs: ['M. Zongo'],
  //         date: '2024-10-16',
  //         heure: '09h00 - 12h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Statistiques Appliquées',
  //     seances: [
  //       {
  //         lieu: 'Salle G',
  //         formateurs: ['Dr. Kafando'],
  //         date: '2024-10-18',
  //         heure: '10h00 - 13h00',
  //         statut: 'En attente'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Finances Internationales',
  //     seances: [
  //       {
  //         lieu: 'Salle H',
  //         formateurs: ['Mme. Traoré'],
  //         date: '2024-10-20',
  //         heure: '14h00 - 17h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Langages de Programmation',
  //     seances: [
  //       {
  //         lieu: 'Salle I',
  //         formateurs: ['M. Tapsoba', 'Dr. Ouédraogo'],
  //         date: '2024-10-22',
  //         heure: '09h00 - 12h00',
  //         statut: 'Confirmé'
  //       }
  //     ]
  //   },
  //   {
  //     nom: 'Economie Numérique',
  //     seances: [
  //       {
  //         lieu: 'Salle J',
  //         formateurs: ['Dr. Kouyaté'],
  //         date: '2024-10-25',
  //         heure: '10h00 - 13h00',
  //         statut: 'En attente'
  //       }
  //     ]
  //   }
  // ];

  // les groupe des participants
//   getGroupes() {
//     const groupes = [];
//     for (let i = 0; i < this.cohort.length; i += 3) {
//         groupes.push(this.cohort.slice(i, i + 3));
//     }
//     return groupes;
// }
// getGroupes() {
//   const groupes = [];
//   for (let i = 0; i < this.utilisateurs.length; i += 3) {
//       // Filtrer uniquement les étudiants pour former les groupes
//       const etudiants = this.utilisateurs.filter(user => user.role === 'etudiant');
      
//       // Ajouter les étudiants par groupes de 3
//       groupes.push(etudiants.slice(i, i + 3));
//   }
//   return groupes;
// }

}
