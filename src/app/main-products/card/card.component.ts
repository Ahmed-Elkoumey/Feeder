import { Component, OnInit,Input } from '@angular/core';
import { ProductType } from 'src/app/interface/product-type';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  faMagnifyingGlass=faMagnifyingGlass;
  
  @Input() card : ProductType ={
    "createdAt":"",
    "name":"",
    "image":"",
    "rate":0,
    "count":0,
    "description":"",
    "price":"",
    "reviews":[
    ],
    "id":"0"
  }



  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  getDetails(){
    this.router.navigate(['/cardDetails', this.card.id])
  }


}
