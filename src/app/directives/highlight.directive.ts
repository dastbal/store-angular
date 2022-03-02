import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter')
   x(){
     this.e.nativeElement.style.fontSize = '1.05rem';


    }
    @HostListener('mouseleave')
    y(){
      this.e.nativeElement.style.fontSize = '1rem';

  }

  constructor(private e : ElementRef) {
    this.e.nativeElement.style.color = 'gray';
  }


}
