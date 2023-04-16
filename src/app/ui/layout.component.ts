import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@Component({
    selector: 'app-layout',
    standalone: true,
    template: `
        <div class="grid-container">
            <app-header />
            <main class="container mx-auto px-4 py-8">
                <router-outlet />
            </main>
            <app-footer />
        </div>
    `,
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export default class LayoutComponent {}
