import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ArticlesComponent from '../articles/articles.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ArticlesComponent],
  templateUrl: './banner.component.html'
})
export default class BannerComponent {

}
