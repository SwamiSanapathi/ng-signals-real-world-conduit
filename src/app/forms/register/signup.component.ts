import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { SignupService } from './signup.service';
import { processAuthErrors } from 'src/app/utils/process-auth-errors';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './signup.component.html',
    imports: [RouterLink, FormsModule, JsonPipe, NgIf, NgFor],
    providers: [SignupService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignupComponent {
    signupService = inject(SignupService)
    user: NewUser = { email: '', password: '', username: '' };
    errors: Record<string, string[]> = {};


    signup() {
        this.signupService.addUser(this.user).subscribe((res: any) => {
            console.log(res);
        }, (error: httpErrorResponse) => {
            this.errors = processAuthErrors(error.error.errors);
        });
    }
}

export interface httpErrorResponse {
    error: {
        errors: Record<string, string[]>;
    }
}