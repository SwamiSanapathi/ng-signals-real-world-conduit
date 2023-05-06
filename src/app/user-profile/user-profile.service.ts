import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ApiConfigurations } from '../config/api-config';

@Injectable()
export class UserProfileService {
    readonly #http = inject(HttpClient);
    readonly #ApiClient = inject(ApiConfigurations);
    // readonly destroy$ = new Subject<void>();

    getUser(username: string | null): Observable<any> {
        return this.#http.get(`${this.#ApiClient.rootUrl}/profiles/${username}`);
    }

    // ngOnDestroy() {
    //     this.destroy$.next();
    //     this.destroy$.complete();
    // }
}
