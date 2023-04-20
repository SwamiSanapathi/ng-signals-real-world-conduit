import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiConfigurations } from '../../config/api-config';
import { NewUser } from '../../models/new-user';
@Injectable()
export class SignupService {
    readonly #http = inject(HttpClient);
    readonly apiUrl = inject(ApiConfigurations);

    addUser(user: NewUser): any {
        console.log('user form --->', user);
        return this.#http.post(this.apiUrl.rootUrl + '/users', { user })
    }
}
