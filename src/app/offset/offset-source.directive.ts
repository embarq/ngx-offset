import { Directive, ElementRef, Input } from '@angular/core';

export type OffsetProperty
  = 'offsetHeight'
  | 'offsetWidth'
  | 'offsetTop'
  | 'offsetLeft'
  | 'offsetParent';

@Directive({
  selector: '[ngxOffsetSource]'
})
export class OffsetSourceDirective {
  @Input('ngxOffsetSource')
  public offsetProperty: OffsetProperty;

  @Input('ngxOffsetValueType')
  public ngxOffsetValueType: any;

  constructor(public element: ElementRef) { }

  public getOffset<T extends HTMLElement>() {
    return (this.element.nativeElement as T)[this.offsetProperty];
  }

}
