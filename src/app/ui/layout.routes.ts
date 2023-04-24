import { Routes } from '@angular/router';
import { authGuard, nonAuthGuard } from '../utils/auth.guard';

export default [
  {
    path: '',
    loadComponent: () => import('../container/banner/banner.component'),
  },
  {
    path: 'signup',
    loadComponent: () => import('../forms/register/signup.component'),
    canMatch: [nonAuthGuard()]
  },
  {
    path: 'login',
    loadComponent: () => import('../forms/login/login.component'),
    canMatch: [nonAuthGuard()]
  },
  {
    path: 'new-article',
    loadComponent: () => import('../new-article/new-article.component'),
    canMatch: [authGuard()]
  },
  {
    path: 'settings',
    loadComponent: () => import('../settings/settings.component'),
    canMatch: [authGuard()]
  },
  {
    path: 'user-profile',
    loadComponent: () => import('../user-profile/user-profile.component'),
    canMatch: [authGuard()]
  },
  // This code redirects any path to the root path.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
] as Routes;
