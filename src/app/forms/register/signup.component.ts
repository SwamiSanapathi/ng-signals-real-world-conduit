import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { processAuthErrors } from 'src/app/utils/process-auth-errors';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { httpErrorResponse } from 'src/app/models/error';

@Component({
    standalone: true,
    templateUrl: './signup.component.html',
    imports: [RouterLink, FormsModule, JsonPipe, NgIf, NgFor],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignupComponent implements OnInit {
    readonly authService = inject(AuthService)
    readonly user: NewUser = { email: '', password: '', username: '' };

    ngOnInit(): void {
        this.authService.errors.set({})
    }
    

    signup() {
        this.authService.addUser(this.user)
    }
}