import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import ArticlesComponent from '../articles/articles.component';
import { TagsComponent } from "../tags/tags.component";
import { ArticlesService } from '../articles/articles.service';
import { ApiConfigurations } from 'src/app/config/api-config';
import { Article } from 'src/app/models/article';
import { Subject, combineLatest, of, takeUntil } from 'rxjs';
import { TagsService } from '../tags/tags.service';

@Component({
  selector: 'app-articles-toggle',
  standalone: true,
  templateUrl: './articles-toggle.component.html',
  providers: [ArticlesService, TagsService],
  imports: [CommonModule, ArticlesComponent, NgComponentOutlet, TagsComponent]
})
export default class ArticlesToggleComponent implements OnInit, OnDestroy {
  articleService = inject(ArticlesService);
  tagsService = inject(TagsService)
  apiClient = inject(ApiConfigurations);
  articles!: Article[]
  tags!: string[];
  isLoading = signal<boolean>(true);
  $destory = new Subject<void>()

  ngOnInit(): void {
    this.changeFeed();

  }

  changeFeed(feedType: 'global' | 'own' = 'global') {
    this.globalArticles(feedType);

  }

  globalArticles(feedType: 'global' | 'own') {
    combineLatest([
      this.articleService.get(`${this.apiClient.rootUrl}/articles`),
      this.tagsService.getTags()
    ]).pipe(takeUntil(this.$destory))
      .subscribe(([articlesResponse, tagsResponse]) => {
        const { articles } = articlesResponse as any
        const { tags } = tagsResponse as any
        this.articles = articles
        this.tags = tags
        this.isLoading.set(false);
        console.log(this.tags);
        console.log(this.articles);

      })
  }

  ngOnDestroy(): void {
    this.$destory.next();
    this.$destory.complete();
  }
}
