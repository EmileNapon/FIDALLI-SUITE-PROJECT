import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importer le modèle Encadrant
import { Encadrant, Utilisateur } from '../models/userModel';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent {

  utilisateurs: Utilisateur[] = [];
  encadrants: Encadrant[] = [];

  constructor(private utilisateurService: UtilisateurService) { }
  
  ngOnInit():void{
    // this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
    //   this.utilisateurs = data;
    // });

    this.utilisateurService.getEncadrants().subscribe((data: Encadrant[]) => {
      this.encadrants = data;
    });
  }



  // encadrants: Encadrant[] = [];  // Liste des encadrants
  // encadrantForm: FormGroup;  // Formulaire pour gérer les encadrants
  // isEditMode = false;  // Variable pour vérifier si nous sommes en mode édition
  // currentEncadrantId: number | null = null;  // Stocke l'ID de l'encadrant en cours de modification
  // errorMessage: string | null = null;  // Pour afficher les erreurs éventuelles

  // constructor(
  //   private utilisateurService: UtilisateurService,  // Utilisation du service utilisateur
  //   private fb: FormBuilder
  // ) {
  //   // Initialisation du formulaire réactif pour encadrants
  //   this.encadrantForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     prenom: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     telephone: ['', Validators.required],
  //     entreprise_id: ['', Validators.required],
  //     specialite: ['', Validators.required],
  //     annee_experience: ['', Validators.required],
  //     niveau_etudes: ['', Validators.required],
  //     statut: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   this.getEncadrants();  // Charger la liste des encadrants au démarrage
  // }

  // // Récupérer la liste des encadrants via UtilisateurService
  // getEncadrants(): void {
  //   this.utilisateurService.getEncadrants().subscribe({
  //     next: (data: Encadrant[]) => {
  //       this.encadrants = data;  // Mettre à jour la liste des encadrants
  //     },
  //     error: err => {
  //       this.errorMessage = 'Erreur lors du chargement des encadrants';
  //       console.error(err);
  //     }
  //   });
  // }

  // // Créer un nouvel encadrant via UtilisateurService
  // createEncadrant(): void {
  //   if (this.encadrantForm.valid) {
  //     const newEncadrant = { ...this.encadrantForm.value, role: 'encadrant' };  // Assigner le rôle 'encadrant'
  //     this.utilisateurService.createUtilisateur(newEncadrant).subscribe({
  //       next: () => {
  //         this.getEncadrants();  // Recharger la liste après création
  //         this.resetForm();  // Réinitialiser le formulaire
  //       },
  //       error: err => {
  //         this.errorMessage = 'Erreur lors de la création de l\'encadrant';
  //         console.error(err);
  //       }
  //     });
  //   }
  // }

  // // Mettre à jour un encadrant existant via UtilisateurService
  // updateEncadrant(): void {
  //   if (this.encadrantForm.valid && this.currentEncadrantId !== null) {
  //     const updatedEncadrant = { ...this.encadrantForm.value, id: this.currentEncadrantId, role: 'encadrant' };  // Assigner le rôle
  //     this.utilisateurService.updateUtilisateur(updatedEncadrant).subscribe({
  //       next: () => {
  //         this.getEncadrants();  // Recharger la liste après mise à jour
  //         this.resetForm();  // Réinitialiser le formulaire
  //       },
  //       error: err => {
  //         this.errorMessage = 'Erreur lors de la mise à jour de l\'encadrant';
  //         console.error(err);
  //       }
  //     });
  //   }
  // }

  // // Passer en mode modification et préremplir le formulaire
  // editEncadrant(encadrant: Encadrant): void {
  //   this.isEditMode = true;
  //   this.currentEncadrantId = encadrant.id;
  //   this.encadrantForm.patchValue(encadrant);  // Préremplir le formulaire avec les données de l'encadrant
  // }

  // // Supprimer un encadrant via UtilisateurService
  // deleteEncadrant(id: number): void {
  //   if (confirm('Voulez-vous vraiment supprimer cet encadrant ?')) {
  //     this.utilisateurService.deleteUtilisateur(id).subscribe({
  //       next: () => {
  //         this.getEncadrants();  // Recharger la liste après suppression
  //       },
  //       error: err => {
  //         this.errorMessage = 'Erreur lors de la suppression de l\'encadrant';
  //         console.error(err);
  //       }
  //     });
  //   }
  // }

  // // Réinitialiser le formulaire et repasser en mode création
  // resetForm(): void {
  //   this.encadrantForm.reset();
  //   this.isEditMode = false;
  //   this.currentEncadrantId = null;
  //   this.errorMessage = null;  // Réinitialiser le message d'erreur
  // }
}