import { Routes } from '@angular/router';
import { authGaurd, nonAuthGaurd } from '../utils/auth.gaurd';

export default [
  {
    path: '',
    loadComponent: () => import('../container/banner/banner.component'),
  },
  {
    path: 'signup',
    loadComponent: () => import('../forms/register/signup.component'),
    canMatch: [nonAuthGaurd()]
  },
  {
    path: 'login',
    loadComponent: () => import('../forms/login/login.component'),
    canMatch: [nonAuthGaurd()]
  },
  {
    path: 'new-article',
    loadComponent: () => import('../new-article/new-article.component'),
    canMatch: [authGaurd()]
  },
  {
    path: 'settings',
    loadComponent: () => import('../settings/settings.component'),
    canMatch: [authGaurd()]
  },
  {
    path: 'user-profile',
    loadComponent: () => import('../user-profile/user-profile.component'),
    canMatch: [authGaurd()]
  },
  // This code redirects any path to the root path.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
] as Routes;
