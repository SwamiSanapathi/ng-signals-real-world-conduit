import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { SignupService } from './signup.service';

@Component({
    standalone: true,
    templateUrl: './signup.component.html',
    imports: [RouterLink, FormsModule],
})
export default class SignupComponent {
    signupService = inject(SignupService)
    user: NewUser = { email: '', password: '', username: '' };
}
