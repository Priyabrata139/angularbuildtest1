import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.fontSize ='24px';
 }

 @HostListener('mouseleave') onMouseLeave(){
  this.elementRef.nativeElement.style.fontSize='10px';
 }

}
