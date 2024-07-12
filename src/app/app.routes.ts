import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UsersItemComponent} from "./components/users-list/users-item/users-item.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'posts-list', component: PostsListComponent},
  {path: 'users-item', component: UsersItemComponent},
];
