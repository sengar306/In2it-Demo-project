import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { GridOptions } from 'ag-grid-community';
// import { InputRedererComponent } from '../input-rederer/input-rederer.component';

// import { exp } from '@amcharts/amcharts5/.internal/core/util/Ease';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let params: any;
  let onGridReady = jasmine.createSpy('onGridReady');
  let viewFormOpen= jasmine.createSpy('viewFormOpen');
  const mockGridOptions1: GridOptions = {
    columnApi: {
      setColumnVisible: jasmine.createSpy('setColumnVisible'),
    } as any,
   
    
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
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
        parentComponent: { onGridReady: onGridReady,  
             viewFormOpen:viewFormOpen },

        parent:'contacts'
      },
    };
      component.gridOptions=mockGridOptions1
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onGridReady', () => {
    component.onGridReady(params);
    expect(component.gridApi).toEqual(params.api);
  });
  it('should initialize clonedColdef with colDefs if defined', () => {
    component.ngOnInit();

    expect(component.clonedColdef).toBeUndefined();

    component.colDefs = [{ field: 'exampleField', hide: true }];
    component.ngOnInit();

    expect(component.clonedColdef).toEqual([
      { field: 'exampleField', hide: false },
    ]);
  });
it(" call isHide",()=>{
      const col={
        hide:true,
     
      }
      
       component.isHide(col)
       
})
//   })
it(" call isHide == FALSE",()=>{
  const col={
    hide:false,
  
  }
  
   component.isHide(col)
   
})
it("on check box select",()=>{
  component.gridApi = {} as any;
  const event={

  }
  const mockGridOptions2: GridOptions = {
    api: {
      getSelectedRows: () => []
    }
  } as any;
  component.gridOptions=mockGridOptions2
  component.onCheckboxSelect(event)


})
it("on cell clicked contacts and name",()=>{
  const mockcontext={
    parent:"contacts"
  }
  const event={
    colDef:{
      field:'name'
    }
  }
  const parentComponentmock={
    viewFormOpen:jasmine.createSpy('viewFormOpen')
  }
  component.parentComponent=parentComponentmock
  component.context=mockcontext
  component.onCellClicked(event)
  


})
it("on cell clicked organizations and organizations",()=>{
  const mockcontext={
    parent:"organizations"
  }
  const event={
    colDef:{
      field:'organization'
    },
    data:{
      id:2
    }
  }   
  const parentComponentmock={
    add:jasmine.createSpy('add')
  }
  component.parentComponent=parentComponentmock
  component.context=mockcontext
  component.onCellClicked(event)
  


})
it("on cell clicked contacts and name",()=>{
  const mockcontext={
    parent:"contacts"
  }
  const event={
    colDef:{
      field:'organization'
    }
  }
  const parentComponentmock={
    goToComponent2:jasmine.createSpy('goToComponent2')
  }
  component.parentComponent=parentComponentmock
  component.context=mockcontext
  component.onCellClicked(event)
  


})
});
