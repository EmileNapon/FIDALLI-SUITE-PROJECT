import { Component, Input, OnInit } from "@angular/core";
import { CertificationService } from "../certification/certification-service/certificationService";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector:'app-certificationContenuEtape',
    templateUrl:'./certificationContenuEtape.html',
    styleUrls:['./certificationContenuEtape.css']
})

export class certificationContenuParcours1Component implements OnInit{

  @Input() users: any[] = [1,1,1,12];
    constructor( private CertificatService:CertificationService,  private router: Router, private route: ActivatedRoute){}
  
    ListCertificatChapitre:any[]=[]
    filteredCertificats:any[]=[]
    ListArticle:any[]=[]
    filtredCertificatArticle:any[]=[]
    certificatId: string | null = null;

    ngOnInit(): void {
      this.certificatId = this.route.snapshot.paramMap.get('idCertificationEParcours1');
      this.getCertificationChapitre()
  }

    getCertificationChapitre(){
        this.CertificatService.getCertificatArticle().subscribe(data => {
          this.ListArticle= data;
          this.filterMatieres()
        });
      }
      filterMatieres(): void {
        if (this.certificatId) {
          this.filteredCertificats = this.ListCertificatChapitre.filter(chapitre => chapitre.idContenuCertificat === this.certificatId);
          this.filtredCertificatArticle = this.ListArticle.filter(article => article.idContenuCertificat === this.certificatId);
        }
      }


}
