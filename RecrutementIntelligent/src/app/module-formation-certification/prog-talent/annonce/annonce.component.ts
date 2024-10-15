import { Component } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {

  annonces = [
    {
      titre: 'Programmation du cours',
      datePublication: '10 Octobre 2024',
      description: 'Cours à venir : Introduction à la finance - Lundi 10 Octobre, 10h-12h. Ce cours abordera les principes de base de la finance et introduira les concepts essentiels liés à la gestion financière...',
      couleur: 'bg-primary'
    },
    {
      titre: 'Webinaire Gestion de projet',
      datePublication: '12 Octobre 2024',
      description: 'Prochain webinaire : Gestion de projet - Vendredi 12 Octobre, 14h-16h. Ce webinaire couvrira les méthodologies de gestion de projet, incluant les processus de planification, d\'exécution, et de suivi...',
      couleur: 'bg-success'
    },
    {
      titre: 'Devoir de Fin de Semestre',
      datePublication: '15 Octobre 2024',
      description: 'Le devoir de fin de semestre pour le cours d\'Économie se tiendra le Lundi 17 Octobre de 14h à 16h. Il couvrira les chapitres 1 à 4 du syllabus et se déroulera en salle 204...',
      couleur: 'bg-info'
    },
    {
      titre: 'Conférence sur l\'Innovation',
      datePublication: '20 Octobre 2024',
      description: 'Ne manquez pas la conférence annuelle sur l\'innovation qui aura lieu le Vendredi 22 Octobre à partir de 10h au centre des congrès. Des experts de divers secteurs seront présents pour discuter...',
      couleur: 'bg-danger'
    }
  ];

}
