import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import { UserPostsComponent } from './components/user-posts/user-posts.component';

export const routes: Routes = [
  {path: '', redirectTo:"users-list" , pathMatch:'full'},
  {path: 'users-list', component: UsersListComponent},
  {path: 'posts-list', component: PostsListComponent},
  {path: 'user-posts/:id', component: UserPostsComponent}
];
