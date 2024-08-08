// import { ParseError } from '@angular/compiler';
// import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';

import { ProductService } from 'src/app/service/product.service';
import { InputRedererComponent } from 'src/app/shared/input-rederer/input-rederer.component';

import { ShareIconComponent } from 'src/app/shared/share-icon/share-icon.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  gridApi: any;
  editIndex: any;
  user: any;
  rowData: any;
  data: any;
  iconchange!: boolean;
  params: any;
  updatedObj: any;
  selectedRows: any;
  panelOpen: boolean = false;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    setTimeout(()=>{
      if ( this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    })
    this.selectedRows = window.history.state.data;
    this.getTableData();
  }

  getTableData() {
    // Fetch user data
    this.product.getUsers().subscribe((users: any) => {
      console.log('Users:', users);

      const filteredUsers = users.resData.data.filter(
        (item: any) => item.is_table_exist !== false
      );

      this.rowData = JSON.parse(JSON.stringify(filteredUsers));
      this.selectedRows.forEach((element: any) => {
        if (!element.table_id) {
          element.table_id = { value: Math.floor(Math.random() * 100) + 1 };
        }
      });
      console.log(this.selectedRows);
      this.rowData.push(...this.selectedRows);
      console.log('Updated RowData:', this.rowData);
    });
  }

  colDefs: ColDef<any>[] = [
    { headerName: 'TableID', field: 'table_id.value', editable: false },
    {
      headerName: 'TableName',
      field: 'table_name.value',
      cellRenderer: InputRedererComponent,
    },

    {
      headerName: 'Table Description',
      field: 'description.value',
      cellRendererFramework: InputRedererComponent,
    },
    { headerName: 'CreatedOn', field: 'created_on.value' },
    { headerName: 'CreatedBy', field: 'created_by.value' },
    { headerName: 'UpdateON', field: 'updated_on.value' },
    { headerName: 'UpdateBy', field: 'updated_by.value' },
    {
      headerName: 'ACTION',
      field: 'ACTION',
      cellRendererFramework: ShareIconComponent,
      cellRendererParams: {
        onDeleteClicked: this.deleteFormData.bind(this),
        onEditClicked: this.isEdittoogle.bind(this),

        closeEdit: this.closeEdit.bind(this),
        iconchange: false,
      },
    },
  ];
  closeEdit(params: any) {
    this.params = params;
    this.params.data.updatedData = this.params.data;
    this.params.data.edit = false;
  }
  deleteFormData(id: any) {
  if(  confirm('Are you sure to delete the product')){
    this.rowData = this.rowData.filter((item: any) => {
      return item.table_id.value !== id;
    });
  }
  else{
    console.log("no Data Delete")
  }
  
 
  }

  isEdittoogle(params: any) {
    this.gridApi = params.api;
    console.log(params);
    this.params = params;
    this.params.data.edit = true;
    const Data = JSON.parse(JSON.stringify(this.params.data));
    this.params.data.updatedData = Data;
    console.log(this.params.data);
  }
  // onBtStartEditing(rowIndex: number, colKey: any) {
  //   if (this.gridApi) {
  //     console.log(`Starting editing at rowIndex ${rowIndex}`);
  //     this.gridApi.setFocusedCell(rowIndex, colKey);
  //     this.gridApi.startEditingCell({
  //       rowIndex: rowIndex,
  //       colKey: colKey,
  //     });
  //   } else {
  //     console.warn('Grid API is not initialized yet.');
  //   }
  // }

  onGridReady(params: any) {
    this.params = params;
    this.gridApi = params.api;
    console.log(params);
  }
  clickOnSetting() {
    this.panelOpen = !this.panelOpen;
  }

  gridOptions: GridOptions = {
    context: { parentComponent: this, parent: 'product-details' },
    suppressClickEdit: true,
  };
  // saveEditData(params:any) {
  //   if(params.data.edit)
  //   {
  //     this.params.data.edit = false;
  //   this.params.data.table_name.value =
  //     this.params.data.updatedData.table_name.value;
  //   this.params.data.description.value =
  //     this.params.data.updatedData.description.value;

  //   }
  //   else{
  //   this.gridOptions.context.parentComponent.rowData[0].addMode=false
  //   this.gridOptions.context.parentComponent.rowData[0]=this.gridOptions.context.parentComponent.rowData[0].updatedData

  //   }
  // }
  back() {
    window.history.back();
  }

  addItems(_addIndex: number | undefined) {
    let newData = {
      // addMode:true,
      is_table_exist: false,
      table_id: {
        value: Math.floor(Math.random() * 100) + 1,
        is_edit: false,
        type: 'integer',
      },
      table_type: {
        value: 'is_standard',
        is_edit: false,
        type: 'boolean',
      },
      table_name: {
        value: '',
        is_edit: true,
        type: 'char',
      },
      description: {
        value: '',
        is_edit: true,
        type: 'char',
      },
      attribute_count: {
        value: 7,
        is_edit: false,
        type: 'integer',
      },
      rows_count: {
        value: 5,
        is_edit: false,
        type: 'integer',
      },
      created_on: {
        value: '23/06/2023',
        is_edit: false,
        type: 'datetime',
      },
      created_by: {
        value: 'Shivank Tyagi',
        is_edit: false,
        type: 'many2one',
      },
      updated_on: {
        value: '23/06/2023',
        is_edit: false,
        type: 'datetime',
      },
      updated_by: {
        value: 'Shivank Tyagi',
        is_edit: false,
        type: 'many2one',
      },
      is_standard: {
        value: true,
        is_edit: false,
        type: 'boolean',
      },
      is_active: {
        value: true,
        is_edit: false,
        type: 'boolean',
      },
      property: {
        is_edit: true,
        is_delete: true,
      },
      related_table: [
        {
          id: 96,
          name: 'Users',
        },
        {
          id: 96,
          name: 'Users',
        },
      ],
    };
    this.gridApi.applyTransaction({
      add: [newData],
    });
    const updatedData = JSON.parse(JSON.stringify(newData));
    // this.newData.updatedData=updatedData

    this.gridOptions.context.parentComponent.rowData.unshift(newData);

    this.gridOptions.context.parentComponent.rowData[0].updatedData =
      updatedData;
    this.gridOptions.context.parentComponent.rowData[0].addMode = true;

   
  }
  searchValue: any;
  searchText() {
    this.gridApi.setQuickFilter(this.searchValue);
  }
}
