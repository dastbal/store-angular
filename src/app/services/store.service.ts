import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myCart :  Pizza[] = [];
  private cart =  new BehaviorSubject<Pizza[]>([]) ;

  cart$ = this.cart.asObservable();

  constructor() { }
  addPizza(pizza : Pizza){
    this.myCart.push(pizza);
    this.cart.next(this.myCart);
  }
  getCart(){
    return this.myCart;
  }
  getTotal(){
    return this.myCart.reduce((sum , pizza)=> sum + pizza.price , 0 );

  }

}
