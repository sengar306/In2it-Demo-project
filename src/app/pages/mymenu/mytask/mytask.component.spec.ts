import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytaskComponent } from './mytask.component';
import { FormBuilder, Validators } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { GridApi, GridOptions } from 'ag-grid-community';
// import { exp } from '@amcharts/amcharts5/.internal/core/util/Ease';
// import { not } from '@angular/compiler/src/output/output_ast';
// let localStorageSpy: jasmine.Spy;
describe('MytaskComponent', () => {
  let component: MytaskComponent;
  let fixture: ComponentFixture<MytaskComponent>;
  let formBuilder: FormBuilder;
  // const event = {
  //   colDef: { field: 'delete' },
  //   data: { ID: 123 },
  // };
  let gridOptions: GridOptions;
  let gridApiMock: GridApi<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytaskComponent],
      imports:[IconsModule],
      providers: [FormBuilder],
    }).compileComponents();
  }); 
  beforeEach(() => {
    fixture = TestBed.createComponent(MytaskComponent);
    component = fixture.componentInstance;
    // localStorageSpy = spyOn(localStorage, 'setItem').and.callFake(() => {});
    // fixture.detectChanges();
    formBuilder = TestBed.inject(FormBuilder);
    component.taskForm = formBuilder.group({
      ID: ['', Validators.required],
      Task: ['', Validators.required],
      workflow: [''],
      startdate: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
    });
    component.formDataList = [
      {
        ID: 1,
        Task: 'Task 1',
        workflow: 'Workflow 1',
        startdate: new Date(),
        duedate: new Date(),
        status: 'Pending',
      },
      {
        ID: 2,
        Task: 'Task 2',
        workflow: 'Workflow 2',
        startdate: new Date(),
        duedate: new Date(),
        status: 'Completed',
      },
      {
        ID: 3,
        Task: 'Task 3',
        workflow: 'Workflow 3',
        startdate: new Date(),
        duedate: new Date(),
        status: 'In Progress',
      },
    ];
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
  it('stored data to be null', () => {
    const mockData = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockData));
    component.getData();
    expect(component.formDataList).not.toBeNull();
    expect(component.formDataList).toEqual(mockData);
      expect(component.rowData).toEqual(mockData);
      expect(component.formDataList).not.toBeNull()
  });
  
  
    it('should handle empty data from localStorage', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
  
      component.getData();
  
      // Assert formDataList and rowData are initialized as empty array
      expect(component.formDataList).toEqual([]);
      expect(component.rowData).toEqual([]);
    });
  

  it('edittoggle', () => {
    expect(component.isEdittoogle).toBeFalse;
    component.toggle();
    expect(component.isToggled).toBeTrue;
  });
  it('should save form data when form is valid', () => {
    // Mock valid form data
    component.taskForm.patchValue({
      ID: 1,
      name: 'Task 1',
      description: 'Description of Task 1',
    });
    spyOn(window, 'confirm').and.returnValue(true);
    component.saveFormData(); // Call saveFormData
    expect(component.isToggled).toBeFalse;

    // expect(component.formDataList.length).toBe(1);
    // expect(component.formDataList[0]).toEqual({
    //   ID: 1,
    //   name: 'Task 1',
    //   description: 'Description of Task 1',
    // });

    // expect(component.taskForm.value).toEqual({
    //   ID: null,
    //   name: '',
    //   description: '',
    // });

   
  });

  it('edit toggle False', () => {
    expect(component.isEdit).toBeTrue;
    component.editData(1);
    expect(component.formDataList).toHaveBeenCalled;
    expect(component.editData).toBeFalse;
  });

  it('should initialize taskForm with correct form controls', () => {
    // Call ngOnInit explicitly for testing purposes
    component.gridOptions=gridOptions
    spyOn(component, 'getData');
    gridOptions.api!.sizeColumnsToFit()
    expect(gridApiMock.sizeColumnsToFit).toHaveBeenCalled();
    component.ngOnInit();
  
    // Assert that taskForm is initialized correctly
    expect(component.taskForm).toBeDefined();
    expect(component.taskForm.get('ID')).toBeDefined();
    expect(component.taskForm.get('Task')).toBeDefined();
    expect(component.taskForm.get('workflow')).toBeDefined();
    expect(component.taskForm.get('startdate')).toBeDefined();
    expect(component.taskForm.get('duedate')).toBeDefined();
    expect(component.taskForm.get('status')).toBeDefined();
    expect(component.getData).toHaveBeenCalled();
  });


  it('should call deleteFormData when colDef.field is "delete"', () => {
    // Mock event object with necessary properties
    const event = {
      colDef: { field: 'delete' },
      data: { ID: 123 }, // Sample data object
    };
    spyOn(component, 'deleteFormData');

    component.onCellClicked(event);
    expect(component.deleteFormData).toHaveBeenCalledWith(event.data.ID);
  });



  it('edit tooggle', () => {
    component.isEdittoogle(3);
    expect(component.isEdit).toBeTrue;
  });
  it('should reset taskForm when isEdit is false', () => {
    // Initialize taskForm with some values (assuming taskForm is initialized in your component)
    component.taskForm = formBuilder.group({
      ID: [1],
      name: ['Task 1'],
      description: ['Description of Task 1']
    });
    component.isEdit = true;
    const id = 1;
    component.isEdittoogle(id);

    expect(component.isEdit).toBe(false);

    expect(component.taskForm.value).toEqual({ ID: null, name: null, description: null })
  });
  it('should save form data when form is valid and confirmed', () => {
    // Set up test data
    const formData = {
      ID: '2',
      Task: 'Test Task',
      workflow: 'Test Workflow',
      startdate: '2024-07-01',
      duedate: '2024-07-01',
      status: 'Pending',
    };

    // Mock the form validity
    component.taskForm.setValue(formData);
    component.taskForm.markAllAsTouched(); // Mark form fields as touched

    // Mock the confirmation dialog
    spyOn(window, 'confirm').and.returnValue(true); // Simulate user clicking 'OK'

    component.saveFormData();
  });
 it("deleteform data",()=>{
  const id =2
  spyOn(window, 'confirm').and.returnValue(true);
  component.deleteFormData(id)
  expect(window.confirm).toHaveBeenCalled()


 })
 it('should not delete form data when not confirmed', () => {
  // Mock data and setup
  const idToDelete = 1;
  component.formDataList = [
    { ID: 1, name: 'John' },
    { ID: 2, name: 'Jane' },
    { ID: 3, name: 'Doe' }
  ];
  spyOn(window, 'confirm').and.returnValue(false); // Mock confirm to return false

  // Call deleteFormData method
  component.deleteFormData(idToDelete);

  expect(window.confirm).toHaveBeenCalled(); // Confirm dialog should have been shown
// No items should be removed
});
it("deleteform data",()=>{

  const id =2
  
  spyOn(window, 'confirm').and.returnValue(true);
  component.deleteFormData(id)
  expect(window.confirm).toHaveBeenCalled()


 })

  
 
  
})
