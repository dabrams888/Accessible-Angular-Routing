import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteTargetDirective } from '../directives/route-target.directive';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [RouterLink, RouteTargetDirective],
  templateUrl: './cats.component.html',
})
export class CatsComponent {}
