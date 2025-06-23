import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteTargetDirective } from '../directives/route-target.directive';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [RouterLink, RouteTargetDirective],
  templateUrl: './dogs.component.html',
})
export class DogsComponent {}
