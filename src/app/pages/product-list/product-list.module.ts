import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { IconsModule } from 'src/app/icons/icons.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    AgGridModule,IconsModule,FormsModule]
})
export class ProductListModule { }
