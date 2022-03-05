import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createUserDTO, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = `${environment.APi_url}/users`

  constructor( private http : HttpClient) { }
  create(newUser : createUserDTO){
    return this.http.post<User>( this.apiUrl,newUser);
  }
  getAll(){
    return this.http.get<User[]>( this.apiUrl);
  }

}
