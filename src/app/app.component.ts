import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/400/200';
  images : string[] = ['https://picsum.photos/900/200','https://picsum.photos/920/200','https://picsum.photos/960/200']




}
