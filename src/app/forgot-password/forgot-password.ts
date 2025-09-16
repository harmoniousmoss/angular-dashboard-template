import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPasswordComponent {
  resetData = {
    email: ''
  };
  
  isEmailSent = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.resetData.email) {
      alert('Please enter your email address');
      return;
    }

    // Simulate sending reset email
    console.log('Password reset requested for:', this.resetData.email);
    
    // In a real application, you would make an API call here
    // For demo purposes, we'll just show the success message
    this.isEmailSent = true;
  }

  resendEmail() {
    console.log('Resending password reset email to:', this.resetData.email);
    // In a real application, you would make another API call here
    alert('Reset email sent again!');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}