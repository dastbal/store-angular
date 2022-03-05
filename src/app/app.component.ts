import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { Profile } from './models/profile.model';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgRta = ''
  imgParent = 'https://picsum.photos/400/200';
  // token : string = '';
  // profile : Profile = {
  //   "sub": "622056db20d846082881e86h",
  //   "role": "admin",
  //   "user": {
  //     "_id": "622056db20d846082881e86h",
  //     "role": "admin",
  //     "email": "steben@gmail.com",
  //     "lastName": "sun",
  //     "firstName": "dave",
  //   },
  // };

   constructor(
     private userService: UsersService,
     private filesService : FilesService,
     private authServive :  AuthService,
     private tokenService : TokenService,
   ){

   }
   ngOnInit(): void {
     const token = this.tokenService.getToken();
     if(token){
       this.authServive.profile()
       .subscribe()
     }

   }

   createUser(){
     this.userService.create({
  firstName: "david",
  lastName: "steven",
  email: "david@gmail.com",
  password: "david95",
  role: 'admin'
})
.subscribe(
  rta =>{
    console.log(rta)
  }
)
   }


   downloadPdf() {
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
      .subscribe(rta => {
        this.imgRta = rta.location;
      });
    }

  }



}
