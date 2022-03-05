import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createUserDTO, User } from '../models/user.model';
import { Auth } from '../models/auth.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.APi_url}`
  private profileShared =  new BehaviorSubject<Profile|null>(null) ;

  profileShared$ = this.profileShared.asObservable();


  constructor(private http : HttpClient,
    private tokenService :  TokenService) { }
  login(email:string , password : string){
    return this.http.post<Auth>(`${this.apiUrl}/auth/login`,{ email, password})
    .pipe(
      tap( (response)=> this.tokenService.saveToken(response.access_token))
    );

  }
  profile(){
    // let headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.apiUrl}/profile`)
    .pipe(
      tap((profile)=> this.profileShared.next(profile as Profile) )
    )
  }
  loginAndGetProfile(email:string , password : string){
    return this.login(email,password)
    .pipe(
      switchMap( ()=> this.profile())
    );

  }

  logout(){
    this.tokenService.removeToken()

  }



}
