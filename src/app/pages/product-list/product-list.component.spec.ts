import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService } from 'src/app/service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GridApi, GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  // let productService: ProductService;
  let router: Router;
  let gridOptions: GridOptions<any>;
  let gridApiMock: GridApi<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [ProductService],
      imports:[HttpClientModule,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    // productService = TestBed.inject(ProductService);
  });
  beforeEach(() => {
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

   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it("clcick on seeting",()=>{
    component.clickOnSetting()
    expect(component.panelOpen).toBeTrue
   })
   it("on check box sleect",()=>{
    const mockGridOptions2: GridOptions = {
      api: {
        getSelectedRows: () => []
      }
    } as any;
    component.gridOptions=mockGridOptions2
    component.onCheckboxSelect()
    
   }) 
   it('should navigate to product-details with selectedRows in state', () => {
    // Mock selectedRows data
    component.selectedRows = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ];

    // Spy on router.navigate method
    const navigateSpy = spyOn(router, 'navigate');

    // Call addToList method
    component.addToList();

    // Assert navigation
    expect(navigateSpy).toHaveBeenCalledWith(['products/product-details'], {
      state: { data: component.selectedRows }
    });
  });
  it("ngonit call",()=>{
    
component.gridOptions=gridOptions
    component.ngOnInit()
    
  })
  it('should be isRowSelectable()', () => {
    const params = {
      data: {
        is_table_exist: 'Yes',
      },
    };
    const { isRowSelectable }: any = component.gridOptions;
    isRowSelectable(params);
    const { getRowStyle }: any = component.gridOptions;
    getRowStyle(params);
  });
  

  


});
