import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '../../routing/app-routes';
import { RoutesConfig } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  routes: RoutesConfig = Routes
}
