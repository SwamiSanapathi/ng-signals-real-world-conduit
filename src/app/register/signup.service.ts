import { Injectable, inject } from '@angular/core';
import { NewUser } from '../models/new-user';
import { ApiService } from '../common-services/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiConfigurations } from '../config/api-config';

@Injectable()
export class SignupService {
  readonly #http = inject(HttpClient);
  readonly apiUrl = inject(ApiConfigurations);
  readonly #apiService = inject(ApiService);

  signup(user: NewUser): any {
    this.#http.post(this.apiUrl.rootUrl + '/add-user', user).subscribe(
      (res) => {
        return res;
      },
      (err) => console.log(err, '<-- erro')
    );
  }
}
