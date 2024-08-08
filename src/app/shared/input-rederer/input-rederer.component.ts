import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  selector: 'app-input-rederer',
  templateUrl: './input-rederer.component.html',
  styleUrls: ['./input-rederer.component.css'],
})
export class InputRedererComponent {
  [x: string]: any;
  params: any;
  gridapi: any;
  inputValue: any;
  inputValuename: any;
  fieldName: string | undefined;
  table_name: any;
  data: any;

  isEditableCell: boolean = false;

  constructor() {}

  rowIndex: any;
    agInit(params:ICellRendererParams): void {
      this.rowIndex = params.rowIndex;
      this.rowIndex = 0;
      this.params = params;
      this.fieldName = params.colDef!.field;
      this.gridapi = params.api;
      this.inputValuename = this.params.data.table_name.value;
      this.inputValue = this.params.data.description.value;
    }

}
