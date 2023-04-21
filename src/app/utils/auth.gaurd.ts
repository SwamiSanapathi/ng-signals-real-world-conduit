import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { AuthService } from "../services/auth-service";

export function authGaurd(): CanMatchFn {
    return () => {
        const authService = inject(AuthService)
        const router = inject(Router)
        console.log('authService.isAuthenticated -->', authService.isAuthenticated());

        if (authService.isAuthenticated()) return true
        return router.parseUrl('/')
    }
}

export function nonAuthGaurd(): CanMatchFn {
    return () => {
        const authService = inject(AuthService)
        const router = inject(Router)
        console.log('authService.isAuthenticated -->', authService.isAuthenticated());
        if (!authService.isAuthenticated()) return true
        return router.parseUrl('/')
    }
}