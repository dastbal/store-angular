import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  myCart : Pizza[] = [];
  totalPrice : number = 0;
  pizzas : Pizza[]= [ ];
  showDetail = false;
  pizzaDetail :  Pizza ={
    _id:'djdj5',
    name: 'Pizza',
    description : 'Delicous',
    image : 'https://picsum.photos/200',
    price : 10,
  };
  constructor(
    private storeService : StoreService,
    private pizzaService : PizzasService,
    ) {
    this.myCart = this.storeService.getCart();
   }

  ngOnInit(): void {
    this.pizzaService.getAllPizzas()
    .subscribe( data =>{
      this.pizzas = data;
      console.log(data);

    })
  }
  onAddToShoppingCart(pizza : Pizza){
    this.storeService.addPizza(pizza);
    this.totalPrice = this.storeService.getTotal();
  }

  togglePizzaDetail(){
    this.showDetail = !this.showDetail;
  }
  showPizzaDetail(id : string){
    this.pizzaService.getPizza(id)
    .subscribe( (data) =>{
      this.togglePizzaDetail();
      this.pizzaDetail = data;
    });





  }

}
