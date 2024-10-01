<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../acceuil-formation/acceuil-formation-services/acceuil-formations-services';
import { ActivatedRoute, Router, Routes } from '@angular/router';
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
<<<<<<< HEAD
export class CoursComponent {
=======
export class CoursComponent implements OnInit{
 
  constructor(private domaineService: DomaineService, private router: ActivatedRoute) { }
  

  coursId: string | null = null;
  cours: any[] = [];
  coursFiltres: any[] = [];

  ngOnInit(): void {
    // Récupérer l'ID du domaine à partir de l'URL
    this.coursId = this.router.snapshot.paramMap.get('coursId');
    this.loadMatieres();
  }

  loadMatieres(): void {
    this.domaineService.getCours().subscribe(data => {
      this.cours = data;
      console.log(this.cours)
      this.filterCours(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }
  filterCours(): void {
    if (this.coursId) {
      this.coursFiltres = this.cours.filter(cour => cour.fk_domaineId === this.coursId);
    }
  }

    
  
>>>>>>> 6fbae786fa7cba7b0bb1f77d11a6c3f5bbc3c1ec

}
