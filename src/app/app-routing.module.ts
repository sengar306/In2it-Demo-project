import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/mymenu/mymenu.module').then((m) => m.MymenuModule),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./pages/myorganization/myorganization.module').then(
        (m) => m.MyorganizationModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'designer',
    loadChildren: () =>
      import('./pages/designer/designer.module').then((m) => m.DesignerModule),
  },
  {
    path: 'Product',
    loadChildren: () =>
      import('./pages/product-list/product-list.module').then((m) => m.ProductListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
