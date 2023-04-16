import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewUser } from 'src/app/models/new-user';

@Component({
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
})
export default class LoginComponent {
    user: NewUser = { username: '', password: '', email: '' };
}
