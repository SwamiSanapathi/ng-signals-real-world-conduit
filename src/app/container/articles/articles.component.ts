import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [AsyncPipe, NgFor, NgIf, JsonPipe],
    templateUrl: './articles.component.html',
    providers: [ArticlesService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticlesComponent {
    articles: Article[] = [];
    @Input({ required: true }) set article(art: any) {
        this.articles = art;
    }
}
