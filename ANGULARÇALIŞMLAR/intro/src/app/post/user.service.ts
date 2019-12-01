import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  path:string='https://jsonplaceholder.typicode.com/'
  getUsers(){
   return this.http.get<User[]>(this.path + "users")
  }
}
