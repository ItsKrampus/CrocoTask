import { Component, inject, OnInit } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { UsersItemComponent } from './users-item/users-item.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UsersItemComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  public users?: UserDto[];
  // refine data so that it matches the users dto
  handleApiResponse(data: UserApi[]) {
    const redfinedData = [];
    // iterate over the data
    for (let user of data) {
      // we get user.name and split it
      let fullname = user.name.split(' ');
      // assing the user data accordingly to dto
      const userDto: UserDto = {
        id: user.id,
        firstName: fullname[0],
        lastName: fullname[1],
        phoneNumber: user.phone,
        companyName: user.company.name,
        email: user.email,
      };
      redfinedData.push(userDto);
    }
    return redfinedData;
  }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (data: any) => {
        this.users = this.handleApiResponse(data);
      },
      error: (error) => console.error('Error fetching users:', error),
    });
  }

  private usersService = inject(UsersServiceService);
}

interface Company {
  name: string;
  [key: string]: any;
}

interface UserApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any;
  phone: string;
  website: string;
  company: Company;
}

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  email: string;
}
