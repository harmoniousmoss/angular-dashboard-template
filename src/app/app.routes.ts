import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { ForgotPasswordComponent } from './forgot-password/forgot-password';
import { ProfileComponent } from './profile/profile';
import { BillingComponent } from './billing/billing';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'billing', component: BillingComponent },
  { path: '**', redirectTo: '/login' }
];
