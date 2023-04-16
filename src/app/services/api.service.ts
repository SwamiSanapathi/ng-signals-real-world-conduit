import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { ApiConfigurations } from "../config/api-config";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // constructor(private api: ApiConfigurations) { }
    readonly #http = inject(HttpClient)
    readonly apiUrl = inject(ApiConfigurations)

    post(data: any): Observable<any> {
        return this.#http.post(this.apiUrl.rootUrl + '/add-user', data)
    }
}