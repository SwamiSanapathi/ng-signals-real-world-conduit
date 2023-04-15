import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: `
    <app-header />
    <router-outlet/>
    <app-footer/>
  `,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export default class LayoutComponent {}
