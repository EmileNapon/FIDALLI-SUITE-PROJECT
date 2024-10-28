import { Component } from '@angular/core';
import { Annonce } from './model-service/model-annonce';
import { AnnonceService } from './model-service/annonce.service'


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {

  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.loadAnnonces();
  }

  // Charger les annonces à partir du service
  loadAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(data => {
      this.annonces = data;
      console.log(this.annonces)
    });
  }

 

}
