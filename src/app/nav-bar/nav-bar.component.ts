import { Component, OnInit } from '@angular/core';
import { faShoppingBasket,faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgxNavbarCollapseComponent } from 'ngx-bootstrap-navbar/public-api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  faShoppingBasket=faShoppingBasket;
  faHeart=faHeart;
  ngOnInit(): void {
  }

}
