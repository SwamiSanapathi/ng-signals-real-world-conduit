import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Injectable()
export class ArticlesService {

    destroy$ = new Subject<void>()
    constructor(private http: HttpClient) { }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();

    }

    get(url: string) {
        this.destroy$.next();
        return this.http.get(url)
    }

}
