import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private apiUrl ='https://pure-hamlet-79993.herokuapp.com/pizzas';

  constructor( private http: HttpClient) { }

  getAllPizzas(){
    return this.http.get<Pizza[]>(this.apiUrl);

  }
  getPizza(id :  string){
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`);
  }
}
