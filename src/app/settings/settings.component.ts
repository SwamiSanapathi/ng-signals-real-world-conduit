import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  templateUrl: './settings.component.html'
})
export default class SettingsComponent {
  #authService = inject(AuthService)
  #router = inject(Router)

  logout() {
    this.#authService.isAuthenticated.set(false);
    this.#authService.user.set(null);
    sessionStorage.clear();
    this.#router.navigate(['/'])
  }
}
