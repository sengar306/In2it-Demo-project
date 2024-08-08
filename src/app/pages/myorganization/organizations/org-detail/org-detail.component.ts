import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.css'],
})
export class OrgDetailComponent implements OnInit {
  constructor() {}
  item!: any;
  rowData:any
  organizationName!:any
  ngOnInit(): void {
   
    this.rowData=this.inputData.contact
  
    
    
  }
  @Input() inputData!: any;
  active = 1;
  profile: boolean = false;
  openProfile(item: any) {
    this.profile = true;
    console.log(item)
    this.item = item.data
    
  }
  closeProfile() {
    this.profile = false;
  }

  colDefs: ColDef[] = [
    // { checkboxSelection: true, headerCheckboxSelection: true,minWidth:100},
  
      { headerName: 'Name', field: 'name' },
      { headerName: 'role', field: 'role' },
      { headerName: 'phone', field: 'phone' },
      { headerName:'email',field:'email'}
   
  
    ];
  

}
