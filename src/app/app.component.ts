import { Component } from '@angular/core';
import { faCoffee,faBasketShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Feeder';

  faBasketShopping=faBasketShopping
  faCoffee = faCoffee;
}
