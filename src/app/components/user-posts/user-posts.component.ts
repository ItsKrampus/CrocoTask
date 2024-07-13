import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../services/post-service.service';
import { PostItemComponent } from '../posts-list/post-item/post-item.component';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']  
})
export class UserPostsComponent implements OnInit {
  posts?: PostDto[];
  userId?: number;

  private postsService = inject(PostServiceService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchPosts();
    console.log(this.posts)
  }

  fetchPosts(): void {
    this.postsService.getPosts().subscribe({
      next: (data: any) => { // Using 'any' here
        if (this.userId) {
          this.posts = data.filter((post: any) => post.userId === this.userId);
        }
      },
      error: (error) => console.error('Error fetching posts:', error)
    });
  }
  
}

interface PostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
}
