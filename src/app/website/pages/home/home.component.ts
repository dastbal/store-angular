import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images : string[] = ['https://picsum.photos/900/200','https://picsum.photos/920/200','https://picsum.photos/960/200']
  pizzaId : string | null = null;
  constructor(private route : ActivatedRoute) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe( params =>{
      this.pizzaId = params.get('pizza');
      console.log(this.pizzaId);
    })
  }

}
