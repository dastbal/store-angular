import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input()
  img : string = ''
  tamplateImg = 'https://picsum.photos/200';





  constructor() { }
   ngOnInit(): void {

   }

  imgError(){
    this.img = 'https://picsum.photos/200';
  }

}
