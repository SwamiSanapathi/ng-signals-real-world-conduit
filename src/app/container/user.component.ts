import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <main class="bg-gray-900 py-10">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-white mb-8">Our Users</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User 1"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">John Doe</h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User 2"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">Jane Smith</h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="User 3"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">
                Robert Johnson
              </h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="User 4"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">Emily Davis</h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="User 5"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">
                Michael Brown
              </h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/6.jpg"
              alt="User 6"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">
                Olivia Rodriguez
              </h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="User 7"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">William Lee</h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="User 8"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">Sophia Perez</h3>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend scelerisque ipsum vel vehicula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  imports: [],
})
export default class UserComponent {}
