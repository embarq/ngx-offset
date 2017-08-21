import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  @ViewChild('dependency')
  public dependency: ElementRef;

  public updater$: BehaviorSubject<void>;

  constructor() {
    this.updater$ = new BehaviorSubject<void>(void 0);
  }
  public toggle() {
    this.updater$.next(void 0);
  }
  public inc() {
    const init = (this.dependency.nativeElement as HTMLElement).offsetHeight;
    (this.dependency.nativeElement as HTMLElement).style.height = (init + 2).toString() + 'px';
  }
  public dec() {
    const init = (this.dependency.nativeElement as HTMLElement).offsetHeight;
    (this.dependency.nativeElement as HTMLElement).style.height = (init - 2).toString() + 'px';
  }
}
