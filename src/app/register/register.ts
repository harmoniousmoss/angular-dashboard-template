import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  registerData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.registerData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    console.log('Registration attempt:', this.registerData);
    // In a real app, you would send this data to your backend
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}