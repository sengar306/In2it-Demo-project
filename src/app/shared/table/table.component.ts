import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef, GridApi, GridOptions,  } from 'ag-grid-community';
// import { MytaskComponent } from 'src/app/pages/mymenu/mytask/mytask.component';

import { ServiceService } from 'src/app/service/service.service';
// interface CustomColDef extends ColDef {
//   eye?: boolean; // Define custom properties here
// }
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  getContextMenuItems: any;
  organization: any;
  params:any
  context:any
  gridApi!: GridApi;
  searchQuery: string = '';
  parentComponent: any;
  @Input() gridOptions:GridOptions={}
  @Output() checkBoxEmitter: EventEmitter<any> = new EventEmitter();
  editType:any='fullRow'
  @Input() colDefs!:ColDef[];
  @Input() rowData: any;
@Input() clickSettingFlag:boolean= false
  @Input() panelOpen:boolean=false
clonedColdef!:ColDef[]

  // eye:boolean=true 
  // clonedColDefs: CustomColDef[] =JSON.parse(JSON.stringify(this.colDefs));
// 

  constructor(private service: ServiceService ) {
    this.service.contactSubject.subscribe((data: any) => {
      this.organization = data;
     
    });
    
   
  }


  onGridReady(params: any) {

    this.gridApi=params.api
     this.params=params
    this.context = params.context;
    this.parentComponent = this.context.parentComponent;
    this.parentComponent.onGridReady(params)
    console.log("kdsnkdsnk")
    
  }
  ngOnInit(): void {
  
 this.clonedColdef=this.colDefs
 if(this.clonedColdef){
 this.clonedColdef.map((item)=>{
  item.hide=false
  return item
 
 })
}

    
  }
  onCellClicked(event: any) {

    switch (true) {
      case (this.context.parent === 'contacts' && event.colDef.field=='name') :
      this.parentComponent.viewFormOpen(event.data,event.id)
      break;
      case (this.context.parent==='contacts'&& event.colDef.field=='organization'):
        this.parentComponent.goToComponent2(event.data)
      break;
      case(this.context.parent==='organizations' && event.colDef.field=='organization'  ):
        this.parentComponent.add(event.data.id,event.data)
        break;
     
      
    
    }   
  }
  
  
  public defaultColDef: ColDef = {
    filter: true,
    sortable:true,
   
  
  };
  

  onCheckboxSelect(event: any) {
    if (this.gridApi) {
      const selectedRows = this.gridOptions.api!.getSelectedRows();
      console.log(event);
      this.checkBoxEmitter.emit(selectedRows);
    }
  }

  // clickOnSetting(){
  //   // for (let i = 0; i < this.colDefs.length; i++) {
  //   //   this.colDefs[i].eye = false;
  //   // }
  //   // this.cloneColDefs=JSON.parse(JSON.stringify(this.colDefs));
  //   console.log(this.colDefs)

  // }
  // closePanel()
  // {
  // // {
  // //   for (let i = 0; i < this.colDefs.length; i++) {
  // //     this.colDefs[i].eye = false; 
  // //   }


  // }
  // eyeOpen(i:any){
  //   console.log(i)
  //   this.gridOptions.columnApi?.setColumnVisible(i.field,true)
  //   i.hide=false
  //   // const index= this.cloneColDefs.findIndex((item:any)=>item.field===i.field)
  //   // console.log(index,idx, this.cloneColDefs[idx])
  //   // this.colDefs.splice(index, 0, this.cloneColDefs[idx]);
  //   // this.cloneColDefs[idx].eye = false;
  //   // console.log("eyeopen")
  //   // this.colDefs=[...this.colDefs]

  //   setTimeout(() => {
  //     this.gridOptions.api?.sizeColumnsToFit();
  //   }, 0);
  // }
  // eyeClose(i:any,){
  
  //   console.log(i)
  //   this.gridOptions.columnApi?.setColumnVisible(i.field,false)
  //   i.hide=true
  //   // const index= this.colDefs.findIndex((item:any)=>item.field===i.field)
  //   // this.colDefs = [...this.colDefs];
  //   // this.colDefs.splice(index, 1);

  //   // this.cloneColDefs[idx].eye = true;
  //   setTimeout(() => {
  //     this.gridOptions.api?.sizeColumnsToFit();
  //   }, 0);
  // }
  isHide(col:any){
    if(col.hide){
        this.gridOptions.columnApi!.setColumnVisible(col.field,true)
        col.hide=false

    }
    else{
      this.gridOptions.columnApi!.setColumnVisible(col.field,false)
        col.hide=true
    }
  }



}

