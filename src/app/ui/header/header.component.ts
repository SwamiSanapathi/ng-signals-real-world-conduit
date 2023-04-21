import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgIf],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    readonly authService = inject(AuthService)
}
