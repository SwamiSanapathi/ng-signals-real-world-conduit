import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: ` 
<footer class="bg-gray-800 text-white py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <p>&copy; 2022 My Website</p>
            <div>
                <a href="#" class="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
        </div>
    </footer>
  `,
})
export class FooterComponent {

}
