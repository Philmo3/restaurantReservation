import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appButtonRipple]',
})
export class ButtonRippleDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event) {
    this.createRipple(event);
  }

  private createRipple(event) {
    this.el.nativeElement.classList.add('ripple');
    this.el.nativeElement.blur();
    this.el.nativeElement.focus();
  }
}
