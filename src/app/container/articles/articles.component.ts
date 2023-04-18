import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, computed, effect, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, Subject, Subscription, debounceTime, takeUntil } from 'rxjs';
import { ApiConfigurations } from 'src/app/config/api-config';
import { Article } from 'src/app/models/article';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [AsyncPipe, NgFor, NgIf],
    templateUrl: './articles.component.html',
    providers: [ArticlesService]
})
export default class ArticlesComponent implements OnInit {
    http = inject(HttpClient);
    apiClient = inject(ApiConfigurations);
    api = inject(ArticlesService)
    articles: Article[] = [];
    isLoading: boolean = true;

    globalArticles() {
        this.api.get(`${this.apiClient.rootUrl}/articles`).subscribe((res: any) => {
            this.isLoading = false
            this.articles = res.articles as Article[];
        })
    }

    ngOnInit(): void {
        this.globalArticles();

    }

}
