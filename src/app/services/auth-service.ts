import { Injectable, computed, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AuthService {
    initialAuth = signal<boolean>(false)
    isAuthenticated = computed(() => !this.initialAuth() || sessionStorage.getItem('token') !== null)
    user = signal<string | null>(null)
    username = computed(() => {
        if (this.user() !== null) return this.user()

        if (sessionStorage.getItem('username') !== null) return sessionStorage.getItem('username')
        return null

    })
}