import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ArticlesComponent from '../articles/articles.component';
import ArticlesToggleComponent from '../articles-toggle/articles-toggle.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    templateUrl: './banner.component.html',
    imports: [CommonModule, ArticlesComponent, ArticlesToggleComponent]
})
export default class BannerComponent {

}
