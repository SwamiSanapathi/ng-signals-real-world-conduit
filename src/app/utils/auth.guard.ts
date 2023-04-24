import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export function authGuard(): CanMatchFn {
    return () => {
        const authService = inject(AuthService);
        const router = inject(Router);

        if (authService.isAuthenticated()) return true;
        return router.parseUrl('/');
    };
}

export function nonAuthGuard(): CanMatchFn {
    return () => {
        const authService = inject(AuthService);
        const router = inject(Router);

        if (!authService.isAuthenticated()) return true;
        return router.parseUrl('/');
    };
}
