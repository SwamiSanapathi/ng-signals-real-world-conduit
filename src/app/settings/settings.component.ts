import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
@Component({
    standalone: true,
    templateUrl: './settings.component.html',
    imports: [ReactiveFormsModule],
})
export default class SettingsComponent implements OnInit {
    #authService = inject(AuthService);
    #router = inject(Router);
    nonFormBuilder = inject(NonNullableFormBuilder);
    form!: FormGroup;
    readonly profile = this.#authService.readOnlyUserInfo();

    ngOnInit(): void {
        this.initForm();
    }
    initForm() {
        console.log(this.profile);
        this.form = this.nonFormBuilder.group({
            username: new FormControl(this.profile.username, Validators.required),
            bio: new FormControl('', Validators.required),
            image: new FormControl(this.profile.image, Validators.required),
            email: new FormControl(this.profile.email, { validators: [Validators.required, Validators.email] }),
            password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
        });
    }

    logout() {
        this.#authService.isAuthenticated.set(false);
        this.#authService.user.set(null);
        sessionStorage.clear();
        this.#router.navigate(['/']);
    }

    updateUserInfo() {
        console.log(this.form.value);
    }
}
