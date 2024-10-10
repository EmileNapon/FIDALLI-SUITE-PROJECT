import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationService } from '../certification/certification-service/certificationService';
import { ServicePrincipaleService } from 'src/app/service-principale.service';


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
  constructor( private CertificatService:CertificationService, private ServicePrincipale: ServicePrincipaleService, private router: Router, private route: ActivatedRoute){}
  


  getCertification(){
    this.CertificatService.getCertificat().subscribe(data => {
      this.ListCertificat = data;
      this.filterMatieres()
    });
  }
  getCertificationChapitre(){
    this.CertificatService.getCertificatChapitre().subscribe(data => {
      this.ListCertificatChapitre = data;
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
    }
}


onSelectCertificat(idCertificationEParcours1: string): void {
  this.router.navigate([`/parcours/${idCertificationEParcours1}/parcours`]); // Redirection vers la page des matières du domaine sélectionné
}


filterArticle(val:number): void {
  this.ListCertificatArticle = this.ListCertificatArticle.filter(article=> article.idChapitre===val);
}

ngOnInit(): void {
  this.certificatId = this.route.snapshot.paramMap.get('idCertification');
  this.getCertificationChapitre()
  }
}

