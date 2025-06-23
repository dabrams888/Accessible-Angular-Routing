import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteTargetDirective } from '../directives/route-target.directive';

@Component({
  selector: 'app-dragons',
  standalone: true,
  imports: [RouterLink, RouteTargetDirective],
  templateUrl: './dragons.component.html',
})
export class DragonsComponent {}
