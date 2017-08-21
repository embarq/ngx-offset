import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[ngxOffsetTarget]'
})
export class OffsetTargetDirective {
  @Input('ngxOffsetTarget')
  /**
   * CSS property manipulate to
   * @type {string}
   */
  public ngxOffsetTarget: string;

  constructor(private element: ElementRef, private renderer: Renderer) { }

  public update(offset: any) {
    this.renderer.setElementStyle(this.element.nativeElement, this.ngxOffsetTarget, offset);
  }

}
