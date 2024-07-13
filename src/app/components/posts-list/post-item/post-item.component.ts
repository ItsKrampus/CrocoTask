import { Component, Input } from '@angular/core';
import { PostDto } from '../posts-list.component';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() postData!:PostDto;
}
