import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-users-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users-item.component.html',
  styleUrl: './users-item.component.css',
})
export class UsersItemComponent {
  @Input() usersData: any;
}
