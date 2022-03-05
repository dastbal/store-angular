import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Profile} from 'src/app/models/profile.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private authService : AuthService) { }
  profile : Profile | null = null;


  ngOnInit(): void {
    this.authService.profileShared$
    .subscribe( profile =>{
      this.profile = profile as Profile
    })
  }

}
