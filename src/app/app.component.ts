import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transitionAnimation } from 'src/app/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [transitionAnimation],
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
