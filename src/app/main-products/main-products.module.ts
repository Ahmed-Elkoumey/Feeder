import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardDetailesComponent } from './card-detailes/card-detailes.component';
import { CuonterService } from '../services/cuonter.service';

@NgModule({
  declarations: [
    ProductsListComponent,
    CardComponent,
    CardDetailesComponent,
    
  ],
  imports: [CommonModule,
    FontAwesomeModule,
    
  ],

  exports: [
    ProductsListComponent,
    CardComponent,
   
    CardDetailesComponent,
  ],
})
export class MainProductsModule {}
