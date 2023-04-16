import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiConfigurations } from '../../config/api-config';
import { NewUser } from '../../models/new-user';
import { ApiService } from '../../services/api.service';

@Injectable({ providedIn: 'root' })
export class SignupService {
    readonly #http = inject(HttpClient);
    readonly apiUrl = inject(ApiConfigurations);
    readonly #apiService = inject(ApiService);

    signup(user: NewUser): any {
        console.log('user form --->', user);

        // this.#http.post(this.apiUrl.rootUrl + '/add-user', user).subscribe(
        //   (res) => {
        //     return res;
        //   },
        //   (err) => console.log(err, '<-- erro')
        // );
    }
}
