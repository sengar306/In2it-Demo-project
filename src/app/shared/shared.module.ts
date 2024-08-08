import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ShareIconComponent } from './share-icon/share-icon.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { InputRedererComponent } from './input-rederer/input-rederer.component';



@NgModule({
  declarations: [ TableComponent, ShareIconComponent, InputRedererComponent],
  imports: [
    CommonModule,
    AgGridModule,
    IconsModule,
    FormsModule

  ],
  exports:[TableComponent,
    ShareIconComponent
    
  ]
})
export class SharedModule { }
