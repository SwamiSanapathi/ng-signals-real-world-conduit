import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigurations } from '../config/api-config';
import { httpErrorResponse } from '../models/error';
import { LoginCredentials, NewUser } from '../models/new-user';
import { UserProfile } from '../models/user-profile';
import { processAuthErrors } from '../utils/process-auth-errors';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isAuthenticated = signal<boolean>(false);
    user = signal<string | null>(null);
    readonly username = computed(() => this.user() || this.getUser().username || null);

    profileInfo = signal<UserProfile>({ username: '', image: '', bio: '', following: false, email: '' });
    readonly readOnlyUserInfo = computed(() => (this.profileInfo().username ? this.profileInfo() : this.getUser()));

    readonly #http = inject(HttpClient);
    readonly apiUrl = inject(ApiConfigurations);
    readonly errors = signal<Record<string, string[]>>({});
    readonly #router = inject(Router);

    userLogin(loginCreds: LoginCredentials): any {
        return this.#http.post(this.apiUrl.rootUrl + '/users/login', { user: loginCreds }).subscribe({
            next: (response: any) => {
                {
                    console.log(response);
                    const { user } = response;
                    sessionStorage.setItem('token', user.token);
                    this.isAuthenticated.set(true);
                    this.user.set(user['username']);
                    sessionStorage.setItem('conduit-user', JSON.stringify(user));
                    this.profileInfo.set(user);
                    this.#router.navigate(['/']);
                    this.errors.set({});
                }
            },
            error: (error: httpErrorResponse) => {
                this.errors.set(processAuthErrors(error.error.errors));
            },
        });
    }

    addUser(user: NewUser): any {
        console.log('user form --->', user);
        return this.#http.post(this.apiUrl.rootUrl + '/users', { user }).subscribe({
            next: (res: any) => {
                console.log(res);
                sessionStorage.setItem('token', res.user.token);
                this.isAuthenticated.set(true);
                this.user.set(res.user.username);
                this.#router.navigate(['/']);
                this.errors.set({});
            },
            error: (error: httpErrorResponse) => {
                this.errors.set(processAuthErrors(error.error.errors));
            },
        });
    }

    getAuthStatus() {
        return this.isAuthenticated.set(this.isAuthenticated() || sessionStorage.getItem('token') !== null);
    }

    getUser(): UserProfile {
        const session = sessionStorage.getItem('conduit-user');
        if (!session) return {} as UserProfile;
        try {
            return JSON.parse(session);
        } catch (error) {
            return {} as UserProfile;
        }
    }
}
