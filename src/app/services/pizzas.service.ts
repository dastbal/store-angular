import { HttpClient, HttpParams , HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createPizzaDTO, Pizza, updatePizzaDTO } from '../models/pizza.model';
import { retry  , catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError , map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private apiUrl = `${environment.APi_url}/pizzas`;

  constructor( private http: HttpClient) { }

  getAllPizzas(limit ?: number ,offset ?: number){
    let params = new HttpParams();
    if(limit && offset == 0){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Pizza[]>(this.apiUrl , { params}).pipe(
      retry(2),
      // map(pizzas =>  pizzas.map(pizza =>{
      //   return{
      //     ...pizza,
      //     taxes: pizza.price * 1.12
      //   }
      // }) )
    );

  }
  getPizza(id :  string){
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError(()=>  new Error('Algo esta fallando en el server'));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(()=>  new Error('El producto no existe'));
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(()=>  new Error('No estas permitido'));
        }
        return throwError(()=>  new Error('Ups algo salio mal'));
      })
    )
  }
  getByPage( limit : number ,offset : number){
    return this.http.get<Pizza[]>(this.apiUrl,{
      params: {limit ,offset}
    });

  }
  create(data : createPizzaDTO){
    return this.http.post<Pizza>(this.apiUrl,data);

  }
  update(id : string , data : updatePizzaDTO){
    return this.http.put<Pizza>(`${this.apiUrl}/${id}}`,data);

  }
  delete(id : string){
    return this.http.delete<Pizza>(`${this.apiUrl}/${id}}`);

  }
}
