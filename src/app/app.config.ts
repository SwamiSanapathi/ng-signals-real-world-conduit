import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ApiConfigurations } from './config/api-config';
import { environment } from 'src/environments/environment.development';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ApiConfigurations, useValue: { rootUrl: environment.apiUrl } },
    provideRouter([
      {
        path: '', loadComponent: () => import('./home/home.component')
      }
    ]),
    provideHttpClient()
  ]
};
