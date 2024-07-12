import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../enviroments/enviroments.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(`${environment.BASE_URL}/users`)
  }

  getPosts(){
    return this.http.get(`${environment.BASE_URL}/posts`)
  }
}
