import { Component } from '@angular/core';

import { GridApi, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-share-icon',
  templateUrl: './share-icon.component.html',
  styleUrls: ['./share-icon.component.css'],
})
export class ShareIconComponent{
 

  icon: boolean = false;
  params: any;
  gridapi!: GridApi;
  iconChange: boolean = false;
  inputValue: any;
  constructor() {}
 
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.gridapi = params.api;
    this.inputValue = params.value
  }

 
  onDeleteClicked(): void {
    // if (this.params.onDeleteClicked instanceof Function) {
      switch (true) {
        case this.params.context.parent == 'product-details':
          this.params.onDeleteClicked(this.params.data.table_id.value);
          break;
        case this.params.context.parent == 'tasks':
          this.params.onDeleteClicked(this.params.data.ID);
      }
    }
  //   } else {
  //     console.error('Unable to access row data');
  //   }
  // }

  onEditClicked(): void {
    // Emit an event or call a function when the button is clicked

    if (typeof this.params.onEditClicked === 'function') {
      switch (true) {
        case this.params.context.parent == 'product-details':
          this.iconChange = true;
          console.log('knxcjnj');
          this.params.onEditClicked(this.params);
          break;

        case this.params.context.parent == 'tasks':
          this.params.onEditClicked(this.params.data.ID);
          break;
      }
    }
  }
saveEditData() {

 if(this.params.data.addMode){
   
  delete this.params.data.addMode  
   console.log("dkfsja",this.params.data);
      this.params.data.table_name.value =
      this.params.data.updatedData.table_name.value;
      this.params.data.description.value =
      this.params.data.updatedData.description.value;
      delete this.params.data.updatedData
      
    }
else
  {
    this.params.data.edit = false;
    this.params.data.table_name.value =
    this.params.data.updatedData.table_name.value;
    this.params.data.description.value =
    this.params.data.updatedData.description.value;
    delete this.params.data.updatedData
  }
 
  
  
  

  
  }
  closeEdit() {
    if(!this.params.data.addMode){
      this.params.closeEdit(this.params);
    }else{
      this.params.api.applyTransaction({remove:[this.params.node.data]})
    }

  }
}
