import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../container/banner/banner.component'),
  },
  {
    path: 'signup',
    loadComponent: () => import('../forms/register/signup.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('../forms/login/login.component')
  },
  {
    path: 'new-article',
    loadComponent: () => import('../new-article/new-article.component')
  },
  {
    path: 'settings',
    loadComponent: () => import('../settings/settings.component')
  },
  {
    path: 'user-profile',
    loadComponent: () => import('../user-profile/user-profile.component')
  },
  // This code redirects any path to the root path.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
] as Routes;
