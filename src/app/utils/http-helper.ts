import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export function post(url: string, data: any) {
    const _http = inject(HttpClient)
    return _http.post('http://localhost:3000/posts', {})
}