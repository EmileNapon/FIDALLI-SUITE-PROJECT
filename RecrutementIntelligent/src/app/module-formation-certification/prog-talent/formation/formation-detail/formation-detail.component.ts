import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation, Module, ModuleFormation } from '../../models/tousModel';
import { FormationService } from '../../services/formation.service';


@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit{
  formations!: Formation;
  formationss:any[]=[]
  moduleFormations: ModuleFormation[] = [];
  modules: Module[] = [];

  formationId!: number;

  constructor(
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['FormationId'];
    this.loadFormations();
    // this.loadModules();
  }


  loadFormations(): void {
    console.log(this.formationId)
    this.formationService.getFormationById(this.formationId).subscribe(
      (data) => {
        
        this.formations = data;
        //this.filterFormation();
      }
    );
  }

  // filtrerFormations:any[]=[]
/*
filterFormation(){
  this.filtrerFormations= this.formations.filter(formation=>formation.id=this.formationId)
  console.log(this.filtrerFormations,'##########///////////////////////////');
}

*/

  // loadModules(): void {
  //   this.moduleService.getModules().subscribe(
  //     (data) => {
  //       this.modules = data;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des des modules:', error);
  //     }
  //   );
  // }


  // loadModuleFormations(): void {
  //   this.moduleFormationService.getModuleFormations().subscribe(
  //     (data) => {
  //       this.moduleFormations = data; 
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des modules de formation:', error);
  //     }
  //   );
  // }

  deleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.loadFormations(); // Recharger la liste après la suppression
      });
    }
  }

  onSelectFormationDetail(FormationId: number): void {
    this.router.navigate([`/formation/${FormationId}/inscrit`]); 
  }

}
