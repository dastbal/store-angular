import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {


  @Input()
  pizza : Pizza ={
    _id:'djdj5',
    name: 'Pizza',
    description : 'Delicous',
    image : 'https://picsum.photos/200',
    price : 10,
  };

  @Output()
  pizzaAdded = new EventEmitter<Pizza>();
  @Output()
  pizzaDetail = new EventEmitter<string>();

  constructor() { }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }


  onAddToCart(){
    this.pizzaAdded.emit(this.pizza);

  }
  showDetail(){
    this.pizzaDetail.emit(this.pizza._id);

  }

}
