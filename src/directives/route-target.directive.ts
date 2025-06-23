import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRouteTarget]',
  standalone: true,
})
export class RouteTargetDirective implements AfterViewInit {
  constructor(private ref: ElementRef) {}
  ngAfterViewInit(): void {
    var shouldMoveFocus = window.history.state.isNavigating;
    if (shouldMoveFocus) {
      this.ref.nativeElement.focus();
      window.history.replaceState({ isNavigating: false }, '');
    }
  }
}
