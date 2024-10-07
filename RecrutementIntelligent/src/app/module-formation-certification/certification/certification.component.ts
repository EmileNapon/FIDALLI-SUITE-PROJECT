
import { Component, OnInit } from '@angular/core';
import { CertificationService } from './certification-service/certificationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit{
  

  ListCertificat : any[]=[]
  isFixed: boolean = false;
  constructor( private CertificatService:CertificationService, private router: Router){}

  ngOnInit(): void {
   this.getCertification()
  }

  getCertification(){
    this.CertificatService.getCertificat().subscribe(data => {
      this.ListCertificat = data;
    });
  }

  
onSelectDomaine(idCertification: string): void {
  this.router.navigate([`/certification/${idCertification}/certification`]); // Redirection vers la page des matières du domaine sélectionné
}

}
