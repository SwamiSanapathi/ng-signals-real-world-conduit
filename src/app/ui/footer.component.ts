import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="flex items-center mb-4 lg:mb-0">
            <img
              src="https://www.example.com/my-logo.png"
              alt="Logo"
              class="w-8 h-8 mr-2"
            />
            <p class="text-sm font-medium">My Website</p>
          </div>
          <div class="flex items-center text-sm">
            <a href="#" class="text-gray-400 hover:text-white mr-6">About Us</a>
            <a href="#" class="text-gray-400 hover:text-white mr-6"
              >Contact Us</a
            >
            <a href="#" class="text-gray-400 hover:text-white">FAQ</a>
          </div>
        </div>
        <hr class="border-gray-700 my-6" />
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">&copy; 2022 My Website. All rights reserved.</p>
          <div class="flex items-center mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white mr-6"
              >Privacy Policy</a
            >
            <a href="#" class="text-gray-400 hover:text-white"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
