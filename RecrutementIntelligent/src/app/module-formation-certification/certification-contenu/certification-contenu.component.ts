import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationService } from '../certification/certification-service/certificationService';


@Component({
  selector: 'app-certification-contenu',
  templateUrl: './certification-contenu.component.html',
  styleUrls: ['./certification-contenu.component.css']
})
export class CertificationContenuComponent implements OnInit {


  certificatId: string | null = null;
  ArtilceId: string | null = null;

  ListCertificat : any[]=[]
  ListCertificatChapitre: any[]=[]
  ListCertificatArticle:any[]=[]
  ListCertificatVideo:any[]=[]
  ListCertificatPodcast: any[]=[]
  isFixed: boolean = false;
  isAuth:boolean=false;
  constructor( private CertificatService:CertificationService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.certificatId = this.route.snapshot.paramMap.get('idCertification');
    this.getCertificationChapitre()
    this.getCertificationArticle()
    }



  getCertification(){
    this.CertificatService.getCertificat().subscribe(data => {
      this.ListCertificat = data;
      this.filterMatieres()
      this.getCertificationVideo()
    });
  }
  getCertificationChapitre(){
    this.CertificatService.getCertificatChapitre().subscribe(data => {
      this.ListCertificatChapitre = data;
      this.getCertification()
    });
  }


  getCertificationArticle(){
    this.CertificatService.getCertificatArticle().subscribe(data => {
      this.ListCertificatArticle = data;
    });
  }

  getCertificationVideo(){
    this.CertificatService.getCertificatVideo().subscribe(data => {
      this.ListCertificatVideo = data;
      this.getCertification()
    });
  }

  getCertificationPodcast(){
    this.CertificatService.getCertificatPodcast().subscribe(data => {
      this.ListCertificatPodcast = data;
      this.getCertification()
    });
  }

 
filterMatieres(): void {
  if (this.certificatId) {
    this.ListCertificat = this.ListCertificat.filter(certificat => certificat.id === this.certificatId);
    this.ListCertificatChapitre = this.ListCertificatChapitre.filter(chapitre => chapitre.idContenuCertificat === this.certificatId);
  }
}


l:number=0
filterArticle(val:number): void {
  this.ListCertificatArticle = this.ListCertificatArticle.filter(article=> article.idChapitre===val);
  this.ListCertificatVideo = this.ListCertificatVideo.filter(video=> video.idChapitre===val);
  this.getCertificationArticle()
  this. getCertificationVideo()
}
}
