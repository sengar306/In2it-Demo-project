import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignerComponent } from './designer.component';

const routes: Routes = [{path:"designer",component:DesignerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignerRoutingModule { }
