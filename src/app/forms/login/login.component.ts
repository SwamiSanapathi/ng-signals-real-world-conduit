import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth-service';
@Component({
    standalone: true,
    imports: [FormsModule, NgFor, NgIf, CommonModule],
    templateUrl: './login.component.html',
})
export default class LoginComponent implements OnInit {
    authService = inject(AuthService)
    user: NewUser = { username: '', password: '', email: '' };


    ngOnInit(): void {
        this.authService.errors.set({})
    }

    login() {
        this.authService.userLogin(this.user)
    }
}
