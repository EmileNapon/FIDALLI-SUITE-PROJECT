import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DomaineService } from 'src/app/module-formation-certification/acceuil-formation/acceuil-formation-services/acceuil-formations-services';

@Component({
  selector: 'app-gestionnaire-cours',
  templateUrl: './gestionnaire-cours.component.html',
  styleUrls: ['./gestionnaire-cours.component.css']
})
export class GestionnaireCoursComponent implements OnInit{

  constructor(private domaineService: DomaineService, private router: ActivatedRoute, private route:Router) { }
  selectedDomaineIndex:string=""
  __iconDelete__:boolean=false
  __iconEdit__:boolean=false
  __iconVoirMatiere__:boolean= false
  __addDomaine__:boolean=false

  ondelete():void{
    this.__iconDelete__=!this.__iconDelete__
    this.__iconEdit__=false
    this.__iconVoirMatiere__=false
  }

  onEdit():void{
    this.__iconEdit__=!this.__iconEdit__
    this.__iconVoirMatiere__=false
    this.__iconDelete__=false
  }


  onVoirMatiere():void{
    this.__iconVoirMatiere__=!this.__iconVoirMatiere__
    this.__iconDelete__=false
    this.__iconEdit__=false
  }


  selecterDomaine(domaine:string){
    this.__iconVoirMatiere__=true
    this.__iconDelete__=false
    this.__iconEdit__=false

    this.selectedDomaineIndex=domaine
      
  }

  OnAdd():void{
    this.__addDomaine__=!this.__addDomaine__

    this.__iconDelete__=false
    this.__iconEdit__=false
    this.__iconVoirMatiere__= false
  }


  iddomaineGestionnaireId: string | null = null;
  __matieresGestionnaire__: any[] = [];
  __filteredMatieresGestionnaire__: any[] = [];

  
  
  ngOnInit(): void {
    this.iddomaineGestionnaireId = this.router.snapshot.paramMap.get('iddomaineGestionnaireId');
    this.loadCoursgestionnaire();
  }
  
  loadCoursgestionnaire(): void {
    this.domaineService.getMatieres().subscribe(data => {
      this.__matieresGestionnaire__ = data;
      this.filterMatieresGestionnaire()
      console.log( this.iddomaineGestionnaireId)
    });
  }



  filterMatieresGestionnaire(): void {
    if (this.iddomaineGestionnaireId) {
      this.__filteredMatieresGestionnaire__ = this.__matieresGestionnaire__.filter(matiere => matiere.fk_domaineId === this.iddomaineGestionnaireId);
    }
  }


  onSelectgestionnaireCours(coursGestionnaireId: string): void {
    this.route.navigate([`/gestionnaire/${coursGestionnaireId}/gestionnairecontenuCours`]); // Redirection vers la page des matières du domaine sélectionné
 
  }

  DomaineForm!: FormGroup;
  onSubmit(){}
}
