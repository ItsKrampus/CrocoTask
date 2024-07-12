import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-users-item',
  standalone: true,
  imports: [],
  templateUrl: './users-item.component.html',
  styleUrl: './users-item.component.css'
})
export class UsersItemComponent {
  @Input() usersData: any;
  
}
