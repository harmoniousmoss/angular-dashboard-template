import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent {
  isDropdownOpen = false;

  profileData = {
    fullName: 'Syaeful Bahri',
    email: 'syaeful@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc.'
  };

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  settingsData = {
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true
  };

  constructor(private router: Router) {}

  toggleUserDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  updateProfile() {
    console.log('Updating profile:', this.profileData);
    // In a real application, you would make an API call here
    alert('Profile updated successfully!');
  }

  changePassword() {
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    if (this.passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    console.log('Changing password for user');
    // In a real application, you would make an API call here
    alert('Password changed successfully!');
    
    // Clear password fields
    this.passwordData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  saveSettings() {
    console.log('Saving settings:', this.settingsData);
    // In a real application, you would make an API call here
    alert('Settings saved successfully!');
  }

  deleteAccount() {
    const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    
    if (confirmed) {
      console.log('Deleting account');
      // In a real application, you would make an API call here
      alert('Account deleted successfully. You will be redirected to the login page.');
      this.router.navigate(['/login']);
    }
  }
}