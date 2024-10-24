import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionnaireChapitreServiceService } from './gestionnaire_chapitre/gestionnaire-chapitre-service.service';

@Component({
  selector: 'app-gestionnaire-chapitre',
  templateUrl: './gestionnaire-chapitre.component.html',
  styleUrls: ['./gestionnaire-chapitre.component.css']
})
export class GestionnaireChapitreComponent {

  constructor(private chapitreService: GestionnaireChapitreServiceService,  private fb: FormBuilder, private router: ActivatedRoute, private route:Router) { }
  selectedChapitreIndex:string=""
  __iconDelete__:boolean=false
  __iconVoirChapitre__:boolean= false
  __addChapitre__:boolean=false

  ondelete():void{
    this.__iconDelete__=!this.__iconDelete__
    this.__iconVoirChapitre__=false
  }




  onVoirChapitre():void{
    this.__iconVoirChapitre__=!this.__iconVoirChapitre__
    this.__iconDelete__=false
  }


  selecterchapitre(chapitre:string){
    this.__iconVoirChapitre__=true
    this.__iconDelete__=false
    this.selectedChapitreIndex=chapitre
      
  }

  OnAdd():void{
    this.__addChapitre__=!this.__addChapitre__
    this.__iconDelete__=false
    this.__iconVoirChapitre__= false
  }


  idcoursGestionnaireId: string | null = null;
  __chapitreGestionnaire__: any[] = [];
  __filteredChapitresGestionnaire__: any[] = [];
 
  
  
  ngOnInit(): void {
    this.idcoursGestionnaireId = this.router.snapshot.paramMap.get('idcoursGestionnaireId');
    this.loadCoursgestionnaire();
    this.InitFormCours()
  }
  
  loadCoursgestionnaire(): void {
    this.chapitreService.getChapitre().subscribe(data => {
      this.__chapitreGestionnaire__ = data;
      this.filterMatieresGestionnaire()
      console.log( this.idcoursGestionnaireId)
    });
  }



  filterMatieresGestionnaire(): void {
    if (this.idcoursGestionnaireId) {
      this.__filteredChapitresGestionnaire__ = this.__chapitreGestionnaire__.filter(chapitre => chapitre.cours == this.idcoursGestionnaireId);
    }
  }


  onSelectgestionnaireCours(coursGestionnaireId: string): void {
    this.route.navigate([`/gestionnaire/${coursGestionnaireId}/gestionnairecontenuCours`]); // Redirection vers la page des matières du domaine sélectionné
 
  }





  chapitreForm!: FormGroup;

  InitFormCours(): void {
    this.chapitreForm = this.fb.group({ 
      titre: '',
    });
  }


  ajouterNouvelleMatiere(matiereNom: string): void {
    if (this.idcoursGestionnaireId) {
    const nouvelleMatiere = {
        // Le nom ou autre attribut de la nouvelle matière
        cours: this.idcoursGestionnaireId,  // Associer la matière au domaine sélectionné
        titre:matiereNom,
    }
    

      this.chapitreService.addChapitre(nouvelleMatiere).subscribe(response => {
        console.log('Nouvelle matière ajoutée avec succès', response);
        
        // Optionnel : Actualiser la liste des matières après ajout
        this.filterMatieresGestionnaire();
      });
    } else {
      console.error('Aucun domaine sélectionné');
    }
  }
  





 

  onSubmit(){
    const titre= this.chapitreForm.value.titre;
    console.log(titre)
    this.ajouterNouvelleMatiere(titre)
    this.loadCoursgestionnaire()
    this.OnAdd();
   
  }




}
