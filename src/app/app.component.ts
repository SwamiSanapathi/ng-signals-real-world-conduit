import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export default class AppComponent implements OnInit {
  #authService = inject(AuthService)
  ngOnInit(): void {
    console.log('app init');
    this.#authService.getAuthStatus()
  }

  title = 'ng-16';
}
