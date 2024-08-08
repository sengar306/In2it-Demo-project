import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
  @HostBinding('style.backgroundColor') bg:any
  @HostListener('click') myclick(){
  console.log("kjsankanj")
  this.bg='red'
}
}
