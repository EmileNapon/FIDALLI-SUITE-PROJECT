import { Component, OnInit } from '@angular/core';
import { GestionnaireModifierContenuCoursService } from './gestionnaire-modifier-contenu-cours-service/gestionnaire-modifier-contenu-cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-gestionnaire-modifier-contenu-cours',
  templateUrl: './gestionnaire-modifier-contenu-cours.component.html',
  styleUrls: ['./gestionnaire-modifier-contenu-cours.component.css']
})
export class GestionnaireModifierContenuCoursComponent implements OnInit{

  sous_titre: any[]=[] ;
  sous_titre_filtre: any ;
  description_filtres: any ;
  titre: any ;
  chapitre:any
  chapitre1:any
  description: any;
  contenuId: number = 1; // ID du document à éditer
  chapitreId: number = 1; // ID du document à éditer
  idchapitreGestionnaireId: string | null = null;
  constructor(private contenuService: GestionnaireModifierContenuCoursService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.idchapitreGestionnaireId = this.router.snapshot.paramMap.get('idchapitreGestionnaireId');
    this.loadContenu();
    this.loadChapitre()
  }

  contenus:any[]=[]
  chapitres:any[]=[]
  __filteredChapitresGestionnaire__:any[]=[]
  ContenusFiltres:any[]=[]
  public Editor = ClassicEditor;

  loadContenu(): void {

    this.contenuService.getContenu().subscribe(
      (data) => {
        this.contenus = data;
      });
    
  }

  loadChapitre(): void {
    this.contenuService.getChapitre().subscribe(
      (data) => {
        this.chapitres = data;
        
      });
    this.filterMatieresGestionnaire()
    this.filterContenu()
  }

  filterMatieresGestionnaire(): void {
    if (this.idchapitreGestionnaireId) {
      this.__filteredChapitresGestionnaire__ = this.chapitres.filter(chapitre => chapitre.cours == this.idchapitreGestionnaireId);
      
      console.log(this.idchapitreGestionnaireId)
      console.log("///////////////////////////////")
    }
  }



  
  filterContenu(): void {    
    this.ContenusFiltres = this.contenus.filter(contenu => this.__filteredChapitresGestionnaire__.some(chapitre=>chapitre.id==contenu.chapitre));
    console.log(this.ContenusFiltres)
}



  }


