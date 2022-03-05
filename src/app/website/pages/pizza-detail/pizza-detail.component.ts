import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private pizzaService : PizzasService,
    private location : Location) { }

   pizzaId : string | null = null;
   pizza : Pizza | null = null;

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params)=>{
        this.pizzaId = params.get('pizzaId');
        if( this.pizzaId){
          return  this.pizzaService.getPizza(this.pizzaId)
        }
        return [null]
      }
      )
    )
    .subscribe((data)=>{
      this.pizza = data;
    })

  }
  goToBack(){
    this.location.back();

  }

}
