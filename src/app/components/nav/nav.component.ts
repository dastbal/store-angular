import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private storeService : StoreService) { }

  activeMenu =false;
  counter = 0 ;

  ngOnInit(): void {
    this.storeService.cart$.subscribe(pizzas =>{
      this.counter = pizzas.length;
    });
  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
