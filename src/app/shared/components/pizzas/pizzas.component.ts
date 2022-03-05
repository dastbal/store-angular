import { Component, Input, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { createPizzaDTO, Pizza, updatePizzaDTO } from 'src/app/models/pizza.model';
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
  limit = 6 ;
  offset = 0 ;
  pizzaDetail :  Pizza ={
    _id:'djdj5',
    name: 'Pizza',
    description : 'Delicous',
    image : 'https://picsum.photos/200',
    price : 10,
  };
  @Input()
  set pizzaId(id :string | null ){
    if(id){
      this.showPizzaDetail(id);
    }
  }
  constructor(
    private storeService : StoreService,
    private pizzaService : PizzasService,
    ) {
    this.myCart = this.storeService.getCart();
   }

  ngOnInit(): void {
    this.pizzaService.getAllPizzas(this.limit,this.offset)
    .subscribe( data =>{
      console.log(data)
      this.pizzas = data;
    });
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
      if( this.pizzaDetail ){
        this.showDetail = !this.showDetail;
      }
      this.pizzaDetail = data;
    });

  }
  createNewPizza(){
    const newPizza : createPizzaDTO ={
      name: 'Pizza',
    description : 'Delicous',
    image : 'https://picsum.photos/200',
    price : 10,
    created : '621ec3967b1ce74ad1c8700d'

    };
    this.pizzaService.create(newPizza)
    .subscribe( (data)=>{
      console.log('created', data);
      this.pizzas.unshift(data);
    });
  }


  updatePizza(){
    const changes : updatePizzaDTO={
      name: 'Pizza',
    };
    const id = this.pizzaDetail._id
    this.pizzaService.update(id ,changes)
    .subscribe( (data)=>{
      console.log('updated',data);
      const pizzaIndex = this.pizzas.findIndex(
        pizza =>pizza._id == id
        );
        this.pizzas[pizzaIndex] = data;
        this.pizzaDetail = data;
      });

    }
    deletePizza(){
      const id = this.pizzaDetail._id;
      this.pizzaService.delete(id)
      .subscribe( data =>{
        console.log('deleted',data);
        this.showDetail = false;


    })

  }
  loadMore(){
    this.pizzaService.getByPage(this.limit,this.offset + this.limit)
    .subscribe( data =>{
      this.pizzas= this.pizzas.concat(data);
      this.offset += this.limit;

    })

  }
}
