import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from 'src/app/service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';

describe('YourComponent', () => {
  let component: ProductDetailsComponent; // Replace YourComponent with your actual component class
  let fixture: ComponentFixture<ProductDetailsComponent>; // Fixture for component testing
  let productService: ProductService; // Mock or real instance of ProductService if needed
  let params: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ProductDetailsComponent],
      providers: [ProductService], // Provide ProductService or mock it if needed
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService); // Inject ProductService instance
    params = {
      rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode: true,
        updatedData: {
          table_name: { value: 'updated table ' },
          description: { value: 'hsdvash' },
        },
        edit: true,
        // Example context
      },
      context: {
        parent: 'contacts',
      },
    };
    component.gridApi = {
      setQuickFilter: jasmine.createSpy('setQuickFilter'),
    };
    // Fixture.detectChanges(); // You might not need to call detectChanges in the constructor test
  });

  it('should create component', () => {
    expect(component).toBeTruthy(); // Verify that the component instance is created
  });

  it('should initialize properties correctly in constructor', () => {
    expect(component.panelOpen).toBeFalse();

    expect(productService).toBeTruthy();
  });
  it('call ngonit', () => {
    const mockGridOptions2: GridOptions = {
      api: {
        sizeColumnsToFit: () => {},
      },
    } as any;
    component.gridOptions = mockGridOptions2;

    const testData = {
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    };
    spyOnProperty(window.history, 'state', 'get').and.returnValue(testData);

    component.ngOnInit();

    expect(component.selectedRows).toEqual(testData.data);
  });
  it('should call clso e edit', () => {
    component.closeEdit(params);
    expect(component.params).toEqual(params);
    expect(component.params.data.updatedData).toEqual(params.data);
  });
  it('should delete form data when user confirms deletion', () => {
    const idToDelete = 1; // Replace with a valid ID from your test data
    const initialRowData = [
      { table_id: { value: 1, otherData: 'data' } },
      { table_id: { value: 2, otherData: 'data' } },
    ];
    component.rowData = initialRowData;

    spyOn(window, 'confirm').and.returnValue(true); // Mock confirm to return true

    component.deleteFormData(idToDelete);

    // Assert that the item with the given id is deleted from rowData
    expect(component.rowData.length).toBe(initialRowData.length - 1);
    expect(
      component.rowData.some(
        (item: { table_id: { value: number } }) =>
          item.table_id.value === idToDelete
      )
    ).toBe(false);
  });
  it('should not delete form data when user cancels deletion', () => {
    const idToDelete = 1; // Replace with a valid ID from your test data
    const initialRowData = [
      { table_id: { value: 1, otherData: 'data' } },
      { table_id: { value: 2, otherData: 'data' } },
    ];
    component.rowData = initialRowData;

    spyOn(window, 'confirm').and.returnValue(false); // Mock confirm to return false

    component.deleteFormData(idToDelete);

    // Assert that rowData remains unchanged
    expect(component.rowData.length).toBe(initialRowData.length);
    expect(
      component.rowData.some(
        (item: { table_id: { value: number } }) =>
          item.table_id.value === idToDelete
      )
    ).toBe(true);
  });
  it('should call  is edittoogle ', () => {
    component.isEdittoogle(params);
    expect(component.params).toEqual(params);
  });
  it('should on call ng on gridReady ', () => {
    component.onGridReady(params);
    expect(component.params).toEqual(params);
    expect(component.gridApi).toEqual(params.api);
  });
  it('should on call clickOnSetting ', () => {
    expect(component.panelOpen).toBeFalse;
    component.clickOnSetting();
    expect(component.panelOpen).toBeTrue;
  });
  it('should set quick filter with provided search value', () => {
    const searchValue = 'this is a test';
   component.searchValue=searchValue
    component.searchText();

    expect(component.gridApi.setQuickFilter).toHaveBeenCalledWith(component.searchValue);
  });
  it('should call window.history.back()', () => {
    spyOn(window.history,'back')
   component.back()
      
   expect(window.history.back).toHaveBeenCalled();
 });
 it("call  add item",()=>{
 const gridApiMock = {
    applyTransaction: jasmine.createSpy('applyTransaction'),
  };

  // Mock gridOptions
  const gridOptionsMock = {
    context: {
      parentComponent: {
        rowData: [],
      },
    },
  };
  component.gridApi = gridApiMock;
  component.gridOptions = gridOptionsMock;
  component.addItems(0); 
  expect(gridApiMock.applyTransaction).toHaveBeenCalled();
  expect(gridOptionsMock.context.parentComponent.rowData.length).toBe(1);
 
 })
});
