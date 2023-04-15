import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-gray-800 text-white shadow-md">
      <div
        class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold">My Website</h1>
        <div>
          <a href="#" class="text-gray-400 text-sm mr-4">Log In</a>
          <a
            class="bg-blue-600 text-white text-sm px-4 py-2 rounded-full"
            routerLink="/signup"
            >Sign Up</a
          >
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
