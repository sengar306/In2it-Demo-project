import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIconComponent } from './share-icon.component';


describe('ShareIconComponent', () => {
  let component: ShareIconComponent;
  let fixture: ComponentFixture<ShareIconComponent>;
let mockParams:any
let onEditClicked:jasmine.Spy<any>
let    onDeleteClickedSpy: jasmine.Spy<any>;
let  closeEdit : jasmine.Spy<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareIconComponent],
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareIconComponent);
    component = fixture.componentInstance;
    onDeleteClickedSpy = jasmine.createSpy('onDeleteClicked');
    onEditClicked=jasmine.createSpy('onEditClicked')
    closeEdit=jasmine.createSpy('closeEdit')
    // fixture.detectChanges();
    mockParams = {
      rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:true,
        updatedData:{
          table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
        edit:true,
        onDeleteClicked:   onDeleteClickedSpy,
      context: {
        parent
      }, // Example context

     
      }
      
    };
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should call aginit",()=>{
      component.agInit(mockParams)
      expect(component.params).toEqual(mockParams)
      expect(component.gridapi).toEqual(mockParams.api)
  })
  it("should call on delete clicked",()=>{
    component.params=mockParams
    component.saveEditData()
    expect(component.params.data.table_name.value).toEqual(mockParams.data.table_name.value)
  })
  it('should call save edit mode when addd mode false',()=>{

    component.params= {
      rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        updatedData:{
          table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
        edit:true
      }
    };
    component.saveEditData()
    expect(component.params.data.edit).toBeFalse

  })
  it("should call close edit",()=>{
    spyOn(component,'closeEdit')
    component.params= {
      rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        updatedData:{
          table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
        edit:true
      }
    };
    component.closeEdit()
   
  })
 

  it("on delete clicked call ",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
 
       
        
      },
      context:{
        parent:'product-details'
      },
      onDeleteClicked: onDeleteClickedSpy,

    }
    
    component.onDeleteClicked()
    // expect(component.params.onDeleteClicked).toHaveBeenCalledOnceWith(component.params.data.table_id)
  })
  it("on delete clicked call ",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
 
       
        
      },
      context:{
        parent:'tasks'
      },
      onDeleteClicked: onDeleteClickedSpy,

    }
    
    component.onDeleteClicked()
    // expect(component.params.onDeleteClicked).toHaveBeenCalledOnceWith(component.params.data.table_id)
  })
  it("on delete clicked call ",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
 
       
        
      },
      context:{
        parent:'product-details'
      },
      onEditClicked: onEditClicked,

    }
    
    component.onEditClicked()
  
  })
  it("on delete clicked call ",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
      api: {} as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:false,
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"}

        },
 
       
        
      },
      context:{
        parent:'tasks'
      },
      onEditClicked: onEditClicked,

    }
    
    component.onEditClicked()
  
  })
  it("close mode add mode false",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
       api: {
        applyTransaction: jasmine.createSpy('applyTransaction')
      },// Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
        addMode:true,
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"},
       
        },

 
       
        
      },
      node: { data: {  } },
      context:{
        parent:'tasks'
      },
      closeEdit:closeEdit,
    }
    component.closeEdit()
 
  })
  it("close mode add mode true  ",()=>{
    component.params={rowIndex: 1,
      colDef: { field: 'testField' },
      api: {
      
      } as any, // Mock API object
      data: {
        table_name: { value: 'TableName' },
        description: { value: 'Description' },
     
        table_id : { value: '123' },
        updatedData:{
        table_name:{value:"updated table "},
          description:{value:"hsdvash"},
          addMode:false

        },
       

 
       
        
      },
      context:{
        parent:'tasks'
      },
      closeEdit:closeEdit,
    }
    component.closeEdit()
 
  })
})