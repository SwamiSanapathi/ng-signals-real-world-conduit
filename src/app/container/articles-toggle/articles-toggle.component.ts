import { Component, OnInit } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import ArticlesComponent from '../articles/articles.component';

@Component({
  selector: 'app-articles-toggle',
  standalone: true,
  templateUrl: './articles-toggle.component.html',
  imports: [CommonModule, ArticlesComponent, NgComponentOutlet]
})
export default class ArticlesToggleComponent implements OnInit {
  selectedItem!: { component: typeof ArticlesComponent; inputs: { feedType: string; }; } | { component: typeof ArticlesComponent; inputs: { feedType: string; }; };

  items = {
    global: {
      component: ArticlesComponent,
      inputs: {
        feedType: 'global',
        updated: (changes: any) => console.log("Video changes", changes),
      }
    },
    own: {
      component: ArticlesComponent,
      inputs: {
        feedType: 'own',
        updated: (changes: any) => console.log("Video changes", changes),
      }
    }
  }

  ngOnInit(): void {
    this.changeFeed();
  }
  changeFeed(feedType: 'global' | 'own' = 'global') {
    this.selectedItem = this.items[feedType];
    console.log(this.selectedItem);

  }
}
