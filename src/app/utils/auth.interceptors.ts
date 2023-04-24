import { HttpInterceptorFn } from '@angular/common/http';

export function authInterceptor(): HttpInterceptorFn {
    return (req, next) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            req = req.clone({ setHeaders: { token: `Token ${token}` } });
        }

        return next(req);
    };
}
