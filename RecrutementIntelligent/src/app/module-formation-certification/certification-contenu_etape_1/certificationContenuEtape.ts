import { Component, Input, OnInit } from "@angular/core";
import { CertificationService } from "../certification/certification-service/certificationService";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector:'app-certificationContenuEtape',
    templateUrl:'./certificationContenuEtape.html',
    styleUrls:['./certificationContenuEtape.css']
})

export class certificationContenuParcours1Component implements OnInit{

    constructor( private CertificatService:CertificationService,  private router: Router, private route: ActivatedRoute){}
  
    ListCertificatArticle:any[]=[]
    ListCertificatPosdcast:any[]=[]
    ListCertificatVideo:any[]=[]
    filteredCertificatsArticle:any[]=[]
    filteredCertificatsVideo:any[]=[]
    filteredCertificatPosdcast:any[]=[]
    ListArticle:any[]=[]
    filtredCertificatArticle:any[]=[]
    certificatId: string | null = null;

    ngOnInit(): void {
      this.certificatId = this.route.snapshot.paramMap.get('idCertificationEParcours1');
      this.getCertificationArticle()
      
  }




    getCertificationArticle(){
        this.CertificatService.getCertificatArticle().subscribe(data => {
          this.ListCertificatArticle= data;
          this.filterMatieres()
          this.getCertificationVideo()
          this.getCertificationPosdcast()
        });
      }

      getCertificationVideo(){
        this.CertificatService.getCertificatVideo().subscribe(data => {
          this.ListCertificatVideo= data;
          this.filterMatieres()
        });
      }

      getCertificationPosdcast(){
        this.CertificatService.getCertificatPodcast().subscribe(data => {
          this.ListCertificatPosdcast= data;
          this.filterMatieres()
        });
      }

      filterMatieres(): void {
        if (this.certificatId) {
          this.filteredCertificatsArticle = this.ListCertificatArticle.filter(article => article.idChapitre === this.certificatId);
          this.filteredCertificatsVideo = this.ListCertificatVideo.filter(video => video.idChapitre === this.certificatId);
          this.filteredCertificatPosdcast = this.ListCertificatPosdcast.filter(podcast => podcast.idChapitre === this.certificatId);
        }
      }


}
