import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
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

    globalArticles() {
        this.http.get(`${this.apiClient.rootUrl}/articles`).subscribe((res: any) => {
            this.articles = res.articles as Article[];
        });
    }

    ngOnInit(): void {
        this.globalArticles();
    }
}
