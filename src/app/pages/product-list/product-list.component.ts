import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions, RowClassParams } from 'ag-grid-community';
import { ProductService } from 'src/app/service/product.service';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private product: ProductService,
    private router: Router,
    private service: ServiceService
  ) { 
    this.service.headerNav({ module: '', links: 'Product' });
  }


  user: any;
  rowData: any;
  isRowSelectable: any;
  ngOnInit(): void {
    setTimeout(()=>{
      this.gridOptions.api!.sizeColumnsToFit()
    })
    this.product.getUsers().subscribe((users: any) => {
     
      this.user = users.resData.data;
      this.rowData = users.resData.data;
      this.rowData.forEach((item: any) => {
        item.is_table_exist = item.is_table_exist ? 'Yes' : 'No';
      });
    });
  }
  selectedRows: any;
  colDefs: ColDef[] = [

    { headerName: 'TableName', field: 'table_name.value' ,   checkboxSelection: true,
      headerCheckboxSelection: true,},
    { headerName: 'Table Description', field: 'description.value' },
    { headerName: 'Existing in Product List', field: 'is_table_exist' },
  ];
  gridOptions:GridOptions = {
    isRowSelectable: (params) => {
      const data = params.data;
      return data.is_table_exist === 'No';
    },
    getRowStyle: (params: RowClassParams) => {
      const data = params.data;
      let obj={}
      if (data.is_table_exist === 'Yes') {
      obj={ background: '#333333', color: 'white' };
      }
      return obj

        
    },

    context: { parentComponent: this, parent: 'product' },
  };
  productDetailToogle: boolean = false;
  addToList() {
    this.router.navigate(['products/product-details'], {
      state: { data: this.selectedRows },
    });
  }

  onCheckboxSelect(): void {
    this.selectedRows = this.gridOptions.api!.getSelectedRows();
    console.log(this.selectedRows);
    console.log('Selected Row Data:', this.selectedRows);
  }
   clickSettingFlag:boolean=false
   panelOpen:boolean=false
clickOnSetting()
{
this.panelOpen=!this.panelOpen
}
}
