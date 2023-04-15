import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../container/user.component'),
  },
  {
    path: 'signup',
    loadComponent: () => import('../register/signup.component'),
  },
  // This code redirects any path to the root path.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
] as Routes;
