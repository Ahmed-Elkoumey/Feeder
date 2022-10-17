import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/interface/product-type';
import { ApiProductsService } from 'src/app/services/api-products.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-card-detailes',
  templateUrl: './card-detailes.component.html',
  styleUrls: ['./card-detailes.component.scss'],
  
})
export class CardDetailesComponent implements OnInit {


  productDetail:any={};

  constructor(
    private getDetail: ApiProductsService,
    private route: ActivatedRoute,
  
  ) {}

  ngOnInit(): void {
    const parm = this.route.snapshot.params;
console.log(this.route.snapshot.params);
this.getDetail.getProductsListDetail(parm['id']).subscribe((detail)=>this.productDetail = detail)
  }

  
}
