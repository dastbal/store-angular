import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private storeService : StoreService,
    private userService: UsersService,
    private authService : AuthService,
    private router : Router) { }

  isLogged = false;
  profile : Profile | null =  {
    "sub": "622056db20d846082881e86h",
    "role": "admin",
    "user": {
      "_id": "622056db20d846082881e86h",
      "role": "admin",
      "email": "steben@gmail.com",
      "lastName": "sun",
      "firstName": "dave",
    },
  };

  activeMenu =false;
  counter = 0 ;

  ngOnInit(): void {
    this.storeService.cart$.subscribe(pizzas =>{
      this.counter = pizzas.length;
    });

    this.authService.profileShared$
    .subscribe( data =>{
      this.profile = data;

    })
  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
  login(){
    this.authService.loginAndGetProfile(
      "steven@gmail.com",
      "david95"
    )
    .subscribe(
      ()=>{
        // console.log(rta.access_token);
        // this.getProfile();
        this.isLogged = true;

      }
    )
   }
  //  getProfile(){
  //   this.authService.profile()
  //   .subscribe(data =>{
  //     console.log(data);
  //     this.profile = data as Profile


  //   });
  // }
  logout(){
    this.authService.logout();
    this.profile = null;
    this.isLogged = false;
    this.router.navigate(['']);

  }

}
