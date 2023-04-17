import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ApiConfigurations } from 'src/app/config/api-config';
import { Article } from 'src/app/models/article';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [AsyncPipe, NgFor, NgIf],
    templateUrl: './articles.component.html',
})
export default class ArticlesComponent implements OnInit {
    http = inject(HttpClient);
    apiClient = inject(ApiConfigurations);
    articles: Article[] = [];

    count = signal<number>(1);
    obs$: Observable<number> = toObservable(this.count);

    doubleCount = computed(() => this.count() + 1)

    globalArticles() {
        this.http.get(`${this.apiClient.rootUrl}/articles`).subscribe((res: any) => {
            this.articles = res.articles as Article[];
        });
    }

    ngOnInit(): void {
        this.globalArticles();
        // effect(() => {
        //     this.count.set(5)
        // })
    }
}
