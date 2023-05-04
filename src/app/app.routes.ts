import { Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'datos',
    loadComponent: () => import('./pages/datos/datos.page').then( m => m.DatosPage)
  }
];
