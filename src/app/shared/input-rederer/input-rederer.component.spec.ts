import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRedererComponent } from './input-rederer.component';

describe('InputRedererComponent', () => {
  let component: InputRedererComponent;
  let fixture: ComponentFixture<InputRedererComponent>;
// let params:ICellRendererParams
let mockParams:any
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRedererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRedererComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    mockParams = {
      rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' }
      }
    };

    component.agInit(mockParams);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize properties correctly in agInit', () => {
    expect(component.rowIndex).toBe(0); 
    expect(component.params).toEqual(mockParams); 
    expect(component.fieldName).toBe('testField');
    expect(component.gridapi).toEqual(mockParams.api); 
    expect(component.inputValuename).toBe('TableName'); 
    expect(component.inputValue).toBe('Description'); 
  });
  it("shoul call param .colfield is null",()=>{
    mockParams.colDef.field=undefined
    component.agInit(mockParams)
    
  })
  it("refreshcall ",()=>{
    component
  })
});
