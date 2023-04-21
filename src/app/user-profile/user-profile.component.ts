import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './user-profile.component.html',
  imports: [RouterLink]
})

export default class UserProfileComponent {
  readonly authService = inject(AuthService)

}
