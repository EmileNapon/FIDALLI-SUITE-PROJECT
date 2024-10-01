
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service-connexion/service-connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit  {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  
    onSubmit(): void {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password).subscribe({
          next: (response) => {
            console.log('Login successful', response);
            // Stocker les tokens dans le localStorage
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
            // Rediriger vers la page de tableau de bord
            this.router.navigate(['/acceuil']);
          },
          error: (error) => {
            console.error('Error logging in:', error);
          }
        });
      }
    }
}
