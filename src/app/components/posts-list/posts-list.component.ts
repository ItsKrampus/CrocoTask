import { Component, inject, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { PostItemComponent } from './post-item/post-item.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
  public posts?: PostDto[];

  handleApiResponse(data: PostApi[]): PostDto[] {
    const refinedData: PostDto[] = data.map((post) => ({
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    }));
    return refinedData;
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = this.handleApiResponse(data);
      },
      error: (error) => console.error('Error fetching posts:', error),
    });
  }

  private postsService = inject(PostServiceService);
}

interface PostApi {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
}
