import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // page d’accueil
  { path: 'home', component: HomeComponent },
  // fallback pour toute autre URL
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
