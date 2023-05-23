import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Input as RouteParamInput, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserProfile } from '../models/user-profile';
import { UserProfileService } from './user-profile.service';

@Component({
    standalone: true,
    templateUrl: './user-profile.component.html',
    imports: [RouterLink, NgIf],
    providers: [UserProfileService],
})
export default class UserProfileComponent implements OnInit, OnDestroy {
    readonly #userProfileService = inject(UserProfileService);
    @RouteParamInput() username!: string;
    state = signal<'pending' | 'completed'>('pending');
    localStore = signal<UserProfile>({} as UserProfile);
    destroy$ = new Subject<void>();

    ngOnInit(): void {
        this.getUserInfo();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    async getUserInfo() {
        this.state.set('pending');
        await this.#userProfileService
            .getUser(this.username)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: { profile: UserProfile }) => {
                this.localStore.set(response.profile);
                this.state.set('completed');
            });
    }
}
