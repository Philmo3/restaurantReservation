import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[AddClassOnClick]',
})
export class AddClassOnClickDirective implements OnInit {
  @Input() AddClassOnClick: string = '';
  @Input() classOnRemove: string;
  @Input() targetElementId: string;

  private targetElement: HTMLElement;

  constructor(private hostElement: ElementRef) {}

  ngOnInit(): void {
    this.targetElement = this.getTargetElement(this.hostElement);
  }

  @HostListener('click')
  onClick() {
    if (this.targetElement.classList.contains(this.AddClassOnClick)) {
      if (this.classOnRemove) {
        this.targetElement.classList.add(this.classOnRemove);
      }

      this.targetElement.classList.remove(this.AddClassOnClick);
    } else {
      if (this.classOnRemove) {
        this.targetElement.classList.remove(this.classOnRemove);
      }
      this.targetElement.classList.add(this.AddClassOnClick);
    }
  }

  private getTargetElement(hostElement: ElementRef): HTMLElement {
    if (this.targetElementId) {
      return this.hostElement.nativeElement.querySelector(
        `#${this.targetElementId}`
      );
    }

    return hostElement.nativeElement;
  }
}
