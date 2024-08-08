import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymenuRoutingModule } from './mymenu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    MymenuRoutingModule,
    ReactiveFormsModule,
    IconsModule,
   
  ]
})
export class MymenuModule { }
