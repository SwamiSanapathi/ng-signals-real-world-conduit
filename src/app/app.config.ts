import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { authInterceptor } from './utils/auth.interceptors';
import { ApiConfigurations } from './config/api-config';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: ApiConfigurations, useValue: { rootUrl: environment.apiUrl } },
        provideRouter(
            [
                {
                    path: '',
                    loadComponent: () => import('./ui/layout.component'),
                    loadChildren: () => import('./ui/layout.routes'),
                },
            ],
            withHashLocation()
        ),
        provideHttpClient(withInterceptors([authInterceptor()])),
    ],
};
