import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsComponent } from './organizations.component';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { GridApi, GridOptions } from 'ag-grid-community';
// import { GridApi } from 'ag-grid-community';
// import { GridApi, GridOptions } from 'ag-grid-community';
// import { GridOptions } from 'ag-grid-community';
// import { eventNames } from 'process';
// import { ServiceService } from 'src/app/service/service.service';

describe('OrganizationsComponent', () => {
  let component: OrganizationsComponent;
  let fixture: ComponentFixture<OrganizationsComponent>;
  let gridOptions: GridOptions;
  let gridApiMock: GridApi<any>;

  // let servic:ServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsComponent ,NgbNav]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsComponent);
    component = fixture.componentInstance;
    gridApiMock = jasmine.createSpyObj('GridApi', [
      'sizeColumnsToFit',
      // Add other methods as needed
      'immutableService',
      'csvCreator',
      'excelCreator',
      'rowRenderer',
      // Add more methods from GridApi<any> as needed
    ]);

    // Assign the spy object to gridOptions.api
    gridOptions = {
      api: gridApiMock
    };
    let mockHistoryState: any;
    // Mock history.state object
    mockHistoryState = {
      item: [], // Mocking an array for item
      id: 2,   // Mocking an id
      data: {} // Mocking data if needed
    };

    // Spy on console.log if needed
   

    // Mock the history.state to return the mock object
    spyOnProperty(history, 'state').and.returnValue(mockHistoryState);

    // Mock getContactSubject to return observable of mockData
   
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call add method with event id and event object', () => {
    spyOn(component, 'add');

    const mockEvent = {
      id: '1',
      
    };
    component.onOrganizationClicked(mockEvent);

    // Expect 'add' method to have been called with the event id and event object
    expect(component.add).toHaveBeenCalledWith(mockEvent.id, mockEvent);
  });
  it('noncustomerType() should filter organizations by type "Public"', () => {
    const mockOrganizations = [
      { id: 1, name: 'Org 1', type: 'Private' },
      { id: 2, name: 'Org 2', type: 'Public' },
      { id: 3, name: 'Org 3', type: 'Private' }
    ];
    component.organization = mockOrganizations;

    component.noncustomerType();

    expect(component.filteredOrganization.length).toBe(1); 
    expect(component.filteredOrganization[0].type).toBe('Public');
    expect(component.rowData).toEqual(component.filteredOrganization);
  });
  it('ncustomerType() should filter organizations by type "Private"', () => {
    const mockOrganizations = [
      { id: 1, name: 'Org 1', type: 'Private' },
      { id: 2, name: 'Org 2', type: 'Public' },
      { id: 3, name: 'Org 3', type: 'Private' }
    ];
    component.organization = mockOrganizations;

    component.customerType();

    expect(component.filteredOrganization.length).toBe(2); 
    expect(component.filteredOrganization[0].type).toBe('Private');
    expect(component.rowData).toEqual(component.filteredOrganization);
  });
  it('showall() should filter organizations by type "all"', () => {
    const mockOrganizations = [
      { id: 1, name: 'Org 1', type: 'Private' },
      { id: 2, name: 'Org 2', type: 'Public' },
      { id: 3, name: 'Org 3', type: 'Private' }
    ];
    component.organization = mockOrganizations;

    component.showAllData();

    expect(component.filteredOrganization.length).toBe(3); 
   
    expect(component.rowData).toEqual(component.filteredOrganization);
  });
  it('add() should add item to data if tabs are not initialized', () => {
    const mockItem = {
      id: '44',
      organization: 'ABC Corporation',
      type: 'Public',
      industry: 'Technology',
      onboarding: '2022-01-01',
      related_orgs: ['XYZ Inc.', '123 Enterprises'],
      products: ['Product A', 'Product B', 'Product C'],
      OrgSPOC: 'John Doe',
      email: 'john.doe@abccorp.com',
      phone: '123-456-7890',
      contact: [
        { id: 1, name: 'shami', email: 'viveksengar921927', phone: '2423535', role: 'developer' },
        { id: 2, name: 'vivek', email: 'viveksengar921927', phone: '35353', role: 'developer' }
      ]
    };
    const mockId = '44';
const length=component.data.length
    component.add(mockId, mockItem);

    expect(component.name).toBe('ABC Corporation');

    expect(component.data.length).toBe(length+1);
    expect(component.data[length  ]).toEqual(mockItem);
  });

  it('close() should remove item from data and reset active', () => {
    // Mock data initialization
    component.data = [
      {
        id: '1',
        organization: 'Organization 1',
        type: 'Public',
        industry: 'Technology',
        onboarding: '2022-01-01',
        related_orgs: ['XYZ Inc.', '123 Enterprises'],
        products: ['Product A', 'Product B', 'Product C'],
        OrgSPOC: 'John Doe',
        email: 'john.doe@abccorp.com',
        phone: '123-456-7890',
        contact: [
          { id: 1, name: 'shami', email: 'shami@example.com', phone: '2423535', role: 'developer' },
          { id: 2, name: 'vivek', email: 'vivek@example.com', phone: '35353', role: 'developer' }
        ]
      },
      {
        id: '2',
        organization: 'Organization 2',
        type: 'Private',
        industry: 'Finance',
        onboarding: '2021-12-15',
        related_orgs: ['ABC Corporation', '123 Enterprises'],
        products: ['Product X', 'Product Y'],
        OrgSPOC: 'Jane Smith',
        email: 'jane.smith@xyzinc.com',
        phone: '987-654-3210',
        contact: [
          { id: 3, name: 'emma', email: 'emma@example.com', phone: '53534532', role: 'developer' },
          { id: 4, name: 'vivek1', email: 'vivek1@example.com', phone: '455343454672', role: 'manager' }
        ]
      }
    ];

    component.active = 1; // Set active to an existing index for testing

    const mockEvent = new MouseEvent('click');
    const toRemoveIndex = 1; // Index of the item to remove

    component.close(mockEvent, toRemoveIndex);

    // Assertions
    expect(component.data.length).toBe(1); // Ensure item is removed from data
    expect(component.data[0].organization).toBe('Organization 1'); // Check remaining item
    expect(component.active).toBe(0); // Check active is reset to 0
  });
  it('should call sizeColumnsToFit on gridApi and set datasource correctly in ngOnInit', () => {
    // const gridOptions: GridOptions = {
    //   api: {
    //     sizeColumnsToFit: jasmine.createSpy('sizeColumnsToFit') // Spy on sizeColumnsToFit method
    //   }
    // };

    const navigation = {
      item: {}, // Replace with your expected datasource item
      id: 2
    };

    component.gridOptions = gridOptions; 
// 
    spyOn(component, 'ngOnInit').and.callThrough(); // Spy on ngOnInit method (optional)

    component.ngOnInit();
   
    expect(component.datasource).toEqual(navigation.item);
  });
 

});