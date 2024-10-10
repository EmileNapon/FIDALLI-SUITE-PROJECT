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

  Invalid: boolean = true;
  certificatId: string | null = null;

  ListCertificatChapitre: any[]=[]
  filtredCertificatChapitre:any[]=[]

  ListCertificat:any[]=[]
  filtredCertificat:any[]=[]

  constructor( private CertificatService:CertificationService, private ServicePrincipale: ServicePrincipaleService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.certificatId = this.route.snapshot.paramMap.get('idCertification');
    this.getCertificationChapitre()
    this.getCertification()
   
    }

    getCertification(){
      this.CertificatService.getCertificat().subscribe(data => {
        this.ListCertificat = data;
        this.filterCertificat()
      });
    }

  getCertificationChapitre(){
    this.CertificatService.getCertificatChapitre().subscribe(data => {
      this.ListCertificatChapitre = data;
      this.filterArticle()
    });
  }


  filterCertificat() {
    if(this.certificatId){
      this.filtredCertificat = this.ListCertificat.filter(certificat=> certificat.id===this.certificatId);
    console.log(this.filtredCertificat)
    }
  }


filterArticle() {
  if(this.certificatId){
  this.filtredCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> chapitre.idContenuCertificat===this.certificatId);

  }
}



onSelectCertificat(idCertificationEParcours1: string): void {
  this.router.navigate([`/parcours/${idCertificationEParcours1}/parcours`]); // Redirection vers la page des matières du domaine sélectionné
}

}

