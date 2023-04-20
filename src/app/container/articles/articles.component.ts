import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { ApiConfigurations } from 'src/app/config/api-config';
import { Article } from 'src/app/models/article';
import { ArticlesService } from './articles.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [AsyncPipe, NgFor, NgIf, JsonPipe],
    templateUrl: './articles.component.html',
    providers: [ArticlesService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticlesComponent implements OnInit {
    articleService = inject(ArticlesService);
    apiClient = inject(ApiConfigurations);
    articles = signal<Article[]>([]);
    isLoading = signal(true)
    cdRef = inject(ChangeDetectorRef)

    ngOnInit(): void {
        this.globalArticles();
    }

    globalArticles() {
        this.articleService.get(`${this.apiClient.rootUrl}/articles`).subscribe((res: any) => {
            console.log('response -->', res);
            this.articles.set(res.articles);
            this.isLoading.set(false);
            this.cdRef.markForCheck();
        })
    }
}
