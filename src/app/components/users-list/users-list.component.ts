import {Component, inject, OnInit} from '@angular/core';
import {UsersServiceService} from "../../services/users-service.service";
import {map} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {UsersItemComponent} from "./users-item/users-item.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UsersItemComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  public users: any;
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data
    });
  }
  private usersService = inject(UsersServiceService)
}
