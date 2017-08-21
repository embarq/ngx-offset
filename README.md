# NGX-OFFSET: helper-directive for responsive design development

## Example

```html
<div [ngxOffsetContainer]="updater$" class="parent">
  <div
    ngxOffsetSource="offsetHeight"
    ngxOffsetValueType="px"
    class="dependency">
    Depenency
  </div>
  <div ngxOffsetTarget="margin-top" class="target">
    Target
  </div>
</div>
```

```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public updater$: BehaviorSubject<void>;

  constructor() {
    this.updater$ = new BehaviorSubject<void>(void 0);
  }
  public toggle() {
    this.updater$.next(void 0);
  }
}
```

```css
.parent {
  font-size: 4rem;
  font-family: monospace;
  font-weight: 600;
  text-align: center;
  padding: 8px;
  position: relative;
}
.dependency, .target {
  border: 4px dashed;
  border-radius: 8px;
  padding: 16px 0;
}
.dependency {
  border-color: green;
}
.target {
  position: absolute;
  top: 0;
  width: 100%;
  border-color: purple;
}
```

## API

#### NgxOffsetContainerDirective

- `ngxOffsetContainer`: `ObservableLike<void>`(optional) - observable input for manual updating

#### NgxOffsetSourceDirective

- `OffsetProperty`: `'offsetHeight' | 'offsetWidth' | 'offsetTop' | 'offsetLeft' | 'offsetParent'`
- `ngxOffsetSource`: `OffsetProperty & string` - offset type. Default `'offsetHeight'`
- `ngxOffsetValueType`: `string` - value type. E.g. `px`, `%` etc. Default `'px'`

#### OffsetTargetDirective

- `ngxOffsetTarget`: `string` - CSS property manipulate to. E.g. 'margin-top'
