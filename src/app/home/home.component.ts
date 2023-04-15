import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from "../common/footer.component";
import { HeaderComponent } from "../common/header.component";
import { LoginComponent } from "./signup.component";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <app-header />
  <!-- <app-signup /> -->
  <main class="flex items-center justify-center h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div class="w-1/2">
                <img src="https://via.placeholder.com/600x400" alt="Placeholder image" class="rounded-lg shadow-md">
            </div>
            <div class="w-1/2 px-4">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend scelerisque ipsum vel vehicula. Donec auctor quam quis ligula laoreet hendrerit. Aliquam erat volutpat. Integer non ante auctor, fermentum tortor eu, fermentum velit. Donec bibendum, nibh at imperdiet finibus, arcu velit bibendum eros, vel dapibus arcu purus vel nunc. Pellentesque sodales lacinia nulla, at ultrices nisi rhoncus eu. Vivamus consectetur placerat urna, nec eleifend velit.</p>
            </div>
        </div>
    </main>
  <app-footer />
  `,
  imports: [CommonModule, FooterComponent, HeaderComponent, LoginComponent]
})
export default class HomeComponent {

}
