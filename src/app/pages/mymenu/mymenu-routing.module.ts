import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytaskComponent } from './mytask/mytask.component';
import { MyteamworkComponent } from './myteamwork/myteamwork.component';

const routes: Routes = [
  { path: '', redirectTo: 'mytask', pathMatch: 'full' },
  { path: 'mytask', component: MytaskComponent },
  { path: 'myteamworks', component: MyteamworkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymenuRoutingModule {}
