import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tags.component.html'
})
export class TagsComponent {
  @Input() tags: string[] = [];
}
