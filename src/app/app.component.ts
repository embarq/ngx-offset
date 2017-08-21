import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  @ViewChild('dependency')
  public dependency: ElementRef;

  public updater$: Subject<void>;

  constructor() {
    this.updater$ = new Subject<void>();
  }
  public toggle() {
    this.updater$.next();
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
