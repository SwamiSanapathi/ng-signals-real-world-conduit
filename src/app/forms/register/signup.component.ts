import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { SignupService } from './signup.service';
import { processAuthErrors } from 'src/app/utils/process-auth-errors';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
    standalone: true,
    templateUrl: './signup.component.html',
    imports: [RouterLink, FormsModule, JsonPipe, NgIf, NgFor],
    providers: [SignupService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignupComponent {
    readonly #signupService = inject(SignupService)
    readonly #authService = inject(AuthService)
    readonly #router = inject(Router)
    readonly user: NewUser = { email: '', password: '', username: '' };
    readonly errors = signal<Record<string, string[]>>({})


    signup() {
        this.#signupService.addUser(this.user).subscribe((res: any) => {
            console.log(res);
            sessionStorage.setItem('token', res.user.token);
            this.#authService.initialAuth.set(true)
            this.#authService.user.set(res.user.username)
            this.#router.navigate(['/']);
            this
        }, (error: httpErrorResponse) => {
            this.errors.set(processAuthErrors(error.error.errors));
            console.log('this.errors -->', this.errors());
        });
    }
}

export interface httpErrorResponse {
    error: {
        errors: Record<string, string[]>;
    }
}