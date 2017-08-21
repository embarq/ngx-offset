import {
  AfterContentInit,
  Directive,
  ContentChild,
  Input
} from '@angular/core';
import { OffsetSourceDirective } from './offset-source.directive';
import { OffsetTargetDirective } from './offset-target.directive';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[ngxOffsetContainer]'
})
export class OffsetContainerDirective implements AfterContentInit {
  @Input('ngxOffsetContainer')
  public updateToggle: Observable<void>;

  @ContentChild(OffsetSourceDirective)
  public offsetSource: OffsetSourceDirective;

  @ContentChild(OffsetTargetDirective)
  public offsetTarget: OffsetTargetDirective;

  constructor() { }

  public provideOffset() {
    if (this.offsetSource != null && this.offsetTarget != null) {
      const offsetValue = this.offsetSource.getOffset() + this.offsetSource.valueType;
      this.offsetTarget.update(offsetValue);
    }
  }

  public ngOnInit() {
    if (typeof this.updateToggle !== 'undefined') {
      this.updateToggle.subscribe(() => this.provideOffset());
    }
  }

  public ngAfterContentInit() {
    if (typeof this.updateToggle === 'undefined') {
      this.provideOffset();
    }
  }

}
