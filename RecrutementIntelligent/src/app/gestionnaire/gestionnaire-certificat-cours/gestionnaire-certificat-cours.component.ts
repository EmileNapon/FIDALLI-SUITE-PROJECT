import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionnairesCoursServiceService } from '../gestionnaire-cours/gestionnaires-cours-service/gestionnaires-cours-service.service';

@Component({
  selector: 'app-gestionnaire-certificat-cours',
  templateUrl: './gestionnaire-certificat-cours.component.html',
  styleUrls: ['./gestionnaire-certificat-cours.component.css']
})
export class GestionnaireCertificatCoursComponent implements OnInit{

  constructor(private matiereService: GestionnairesCoursServiceService,  private fb: FormBuilder, private router: ActivatedRoute, private route:Router) { }
  selectedDomaineIndex:string=""
  selectedDomaineIndex1=false
  __iconDelete__:boolean=false
  __iconVoirMatiere__:boolean= false
  __addDomaine__:boolean=false
  addDomaineList:boolean=false

  selectedIds: string[] = [];
  selectedCoursNoms:string[]=[]

  ListDonnees:any[]=[]
 

  ondelete():void{
    this.__addDomaine__=!this.__addDomaine__
    this.addDomaineList=false
  }




  onVoirMatiere():void{
    this.__iconVoirMatiere__=!this.__iconVoirMatiere__
    this.__iconDelete__=false
  }


  selecterDomaine(domaine:string, coursNom: string):void{
    this.__iconVoirMatiere__=true
    this.__iconDelete__=false

    const index = this.selectedIds.indexOf(domaine);
    console.log(index)
    if (index === -1) {
      // Ajouter à la liste des IDs sélectionnés s'il n'est pas présent
      this.selectedIds.push(domaine);
      this.selectedCoursNoms.push(coursNom);
    }
      
  }

  OnAddDomaine(){
    this.__addDomaine__=!this.__addDomaine__
    this.__iconDelete__=false
    this.__iconVoirMatiere__= false
  }

  OnAdd():void{
    this.__addDomaine__=!this.__addDomaine__
    this.__iconDelete__=false
    this.__iconVoirMatiere__= false
  }

  AjoutCours():void{
    this.addDomaineList=true
    console.log('//////////')
  }

  certificatGestionnaireId: string | null = null;
  __matieresGestionnaire__: any[] = [];
  __filteredMatieresGestionnaire__: any[] = [];
 
  
  
  ngOnInit(): void {
    this.certificatGestionnaireId = this.router.snapshot.paramMap.get('certificatGestionnaireId');
    this.loadCoursgestionnaire();
    this.InitFormDomain()
   this.__matieresGestionnaire__=this.matiereService.matiereGestionnaire
  }
  
  loadCoursgestionnaire(): void {
    this.matiereService.getMatieres().subscribe(data => {
      this.__matieresGestionnaire__ = data;
      this.filterMatieresGestionnaire()
      console.log( this.certificatGestionnaireId)
    });
  }



  filterMatieresGestionnaire(): void {
    if (this.certificatGestionnaireId) {
      this.__filteredMatieresGestionnaire__ = this.__matieresGestionnaire__.filter(matiere => matiere.fk_domaineId === this.certificatGestionnaireId);
    }
  }


  onSelectgestionnaireCours(certificatGestionnaireId: string): void {
    this.route.navigate([`/gestionnaire/${certificatGestionnaireId}/GestionnaireCertificat`]); // Redirection vers la page des matières du domaine sélectionné
 
  }





  MatiereForm!: FormGroup;

  InitFormDomain(): void {
    this.MatiereForm = this.fb.group({ 
      nom: '',
    });
  }


  ajouterNouvelleMatiere(matiereNom: string): void {
    if (this.certificatGestionnaireId) {
    const nouvelleMatiere = {
        // Le nom ou autre attribut de la nouvelle matière
        fk_domaineId: this.certificatGestionnaireId,  // Associer la matière au domaine sélectionné
        nom:matiereNom,
    }
    

      this.matiereService.addMatieres(nouvelleMatiere).subscribe(response => {
        console.log('Nouvelle matière ajoutée avec succès', response);
        
        // Optionnel : Actualiser la liste des matières après ajout
        this.filterMatieresGestionnaire();
      });
    } else {
      console.error('Aucun domaine sélectionné');
    }
  }
  





 

  onSubmit(){
    const nom= this.MatiereForm.value.nom;
    console.log(nom)
    this.ajouterNouvelleMatiere(nom)
    this.loadCoursgestionnaire()
    this.OnAdd();
   
  }



  

}
