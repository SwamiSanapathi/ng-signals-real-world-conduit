import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { ApiConfigurations } from "../config/api-config";
import { LoginCredentials, NewUser } from "../models/new-user";
import { processAuthErrors } from "../utils/process-auth-errors";
import { httpErrorResponse } from "../models/error";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class AuthService {
    isAuthenticated = signal<boolean>(false)
    // isAuthenticated = computed(() => this.isAuthenticated() || sessionStorage.getItem('token') !== null)

    user = signal<string | null>(null)
    username = computed(() => {
        return this.user() || sessionStorage.getItem('username') || null

    })


    readonly #http = inject(HttpClient);
    readonly apiUrl = inject(ApiConfigurations);
    readonly errors = signal<Record<string, string[]>>({})
    readonly #router = inject(Router)


    userLogin(loginCreds: LoginCredentials): any {
        console.log('user form --->', loginCreds);
        return this.#http.post(this.apiUrl.rootUrl + '/users/login', { user: loginCreds }).subscribe({
            next: (response: any) => {
                {
                    console.log(response);
                    const { user } = response;
                    this.isAuthenticated.set(true);
                    sessionStorage.setItem('token', user.token);
                    sessionStorage.setItem('username', user.username);
                    this.user.set(user['username'])
                    this.#router.navigate(['/'])
                    this.errors.set({})
                }
            },
            error: (error: httpErrorResponse) => {
                this.errors.set(processAuthErrors(error.error.errors))
            }
        })
    }

    addUser(user: NewUser): any {
        console.log('user form --->', user);
        return this.#http.post(this.apiUrl.rootUrl + '/users', { user }).subscribe({
            next: (res: any) => {
                console.log(res);
                sessionStorage.setItem('token', res.user.token);
                this.isAuthenticated.set(true)
                this.user.set(res.user.username)
                this.#router.navigate(['/']);
                this.errors.set({})
            }, error: (error: httpErrorResponse) => {
                this.errors.set(processAuthErrors(error.error.errors));
            }
        })

    }

    getAuthStatus() {
        return this.isAuthenticated.set(this.isAuthenticated() || sessionStorage.getItem('token') !== null)
    }

}