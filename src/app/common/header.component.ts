import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
 <header class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-gray-800">My Website</h1>
            <div>
                <a href="#" class="text-gray-800 text-sm mr-4">Log In</a>
                <a href="#" class="bg-blue-600 text-white text-sm px-4 py-2 rounded-full">Sign Up</a>
            </div>
        </div>
    </header>
  `,
})
export class HeaderComponent {

}
