import { Routes } from '@angular/router';

import { DefaultComponent } from '../default/default.component';
import { CatsComponent } from '../cats/cats.component';
import { DogsComponent } from '../dogs/dogs.component';
import { DragonsComponent } from '../dragons/dragons.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular Demo',
    component: DefaultComponent,
  },
  {
    path: 'Cats',
    title: 'Cats | Angular Demo',
    component: CatsComponent,
  },
  {
    path: 'Dogs',
    title: 'Dogs | Angular Demo',
    component: DogsComponent,
  },
  {
    path: 'Dragons',
    title: 'Dragins | Angular Demo',
    component: DragonsComponent,
  },
];
