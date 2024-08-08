import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  taskForm: any;

  datasource!: any;
  constructor(private service: ServiceService) {
    this.service.headerNav({ module: 'Org', links: 'All organizarion' });
  }
  rowData: any;
  organization!: any;
  name: any;
  filteredOrganization: any;
  ngOnInit(): void {
    setTimeout(()=>{
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    })
    this.service.contactSubject.subscribe((data) => {
     
      this.organization = data;
      this.filteredOrganization = this.organization;
      this.rowData = this.filteredOrganization;
      const navigation = history.state;
    
      
      if (navigation.item && navigation.id) {
        this.datasource = navigation.data;
        this.add(navigation.id, navigation.item);
      }
    });
 
  }
  data: any = [{ id: 0, organization: 'oragnization' }];
  counter = this.data.length + 1;
  active!: number;
  tabs!: boolean;
  close(event: MouseEvent, toRemove: number) {
    this.data.splice(toRemove, 1);
    this.active = 0;
    console.log(this.active);
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  newData= {
    id: '44',
    organization: 'ABC Corporation',
    type: 'Public',
    industry: 'Technology',
    onboarding: '2022-01-01',
    related_orgs: ['XYZ Inc.', '123 Enterprises'],
    products: ['Product A', 'Product B', 'Product C'],
    'Org SPOC': 'John Doe',
    email: 'john.doe@abccorp.com',
    phone: '123-456-7890',
    contact:[
      {  id:1,
        name:"shami",
        email:"viveksengar921927",
        phone:2423535,
        role:"developer"
      },
      {  id:2,
        name:"vivek",
        email:"viveksengar921927",
        phone:35353,
        role:"developer"
      },
    ]
  }
  add(id: any, item: any) {
    console.log(id);
    this.name = item.organization;
    this.active = id;
    console.log(item);
    if (!this.tabs) {
      this.data.push(item);
    }
  }
  customerType() {
    this.filteredOrganization = this.organization.filter(
      (org: { type: string }) => org.type === 'Private'
    );
    this.rowData = this.filteredOrganization;
  }
  noncustomerType() {
    this.filteredOrganization = this.organization.filter(
      (org: { type: string }) => org.type === 'Public'
    );
    this.rowData = this.filteredOrganization;
  }

  showAllData() {
    this.filteredOrganization = this.organization;
    this.rowData = this.filteredOrganization;
  }
  // sendDataToContact() {
  
  //   this.service.setContact(this.organization);
  // }
  colDefs: ColDef[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
    },
    {
      headerName: 'organization',
      field: 'organization',
      filter: 'agTextColumnFilter',
    },
    { headerName: 'Type', field: 'type' },
    { headerName: 'OnBoarding', field: 'onboarding' },
    { headerName: 'Relatedorgs', field: 'related_orgs' },
    { headerName: 'email', field: 'email' },
    { headerName: 'phone', field: 'phone' },
  ];
  onOrganizationClicked(event: any) {
    console.log('idkjsijdijasi', event);
    this.add(event.id, event);
    console.log(event, event.id);
  }
  gridOptions: GridOptions = {
    context: { parentComponent: this, parent: 'organizations' },
  };
}
