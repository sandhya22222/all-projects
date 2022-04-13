import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ThbsBackground]'
})
export class ThbsBackgroundDirective {

  constructor(private myelem: ElementRef) {
    this.myelem.nativeElement.style.backgroundColor = 'skyblue';
    this.myelem.nativeElement.innerHTML = "Sandy";
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.myelem.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.myelem.nativeElement.style.fontSize = '15px'
  }

  @HostListener('dblclick')
  onMouseDoubleClick() {
    this.myelem.nativeElement.style.color = 'yellow'
  }

  @HostListener('click')
  onMouseSingleClick() {
    this.myelem.nativeElement.style.color = 'Black'
  }


}
