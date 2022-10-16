import { Component, OnInit, Input } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  ourProducts: any[] = [];

  @Input() wishListArray: any = [];

  constructor(private api: ApiProductsService) {}

  ngOnInit(): void {
    this.api
      .getProductsList()
      .subscribe((item: any) => console.log((this.ourProducts = item)));
  }
}
