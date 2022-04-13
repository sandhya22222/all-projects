import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ThbsBackground]'
})
export class ThbsBackgroundDirective {

  constructor(private myelem : ElementRef) {
    this.myelem.nativeElement.style.backgroundColor ='skyblue';
     this.myelem.nativeElement.innerHTML ="Sandy";
   }

}
