import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{path:"products",component:ProductListComponent},
  {path:"products/product-details",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
