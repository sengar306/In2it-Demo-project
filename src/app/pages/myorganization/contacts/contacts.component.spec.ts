import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
// import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let fb:FormBuilder
  let router: Router;
  let data :any
  let contact:any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsComponent],
      imports: [RouterTestingModule, NgbNavModule, ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
    fb = TestBed.inject(FormBuilder);
   
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    const fb: FormBuilder = TestBed.inject(FormBuilder);
    component.profileForm = fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],

      organization: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      another: fb.array([]),
      role: [''],
      additionalRoles: [''],
      remark: [''],
    });
  
   
     data = {
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
      contact: [
        {
          id: 1,
          name: 'shami',
          email: 'viveksengar921927',
          phone: 2423535,
          role: 'developer',
        },
        {
          id: 2,
          name: 'vivek',
          email: 'viveksengar921927',
          phone: 35353,
          role: 'developer',
        },
      ],
    };
     contact= [
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
    component.filtercontact = [
      {
        organization: 'Org1',
        contact: [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', role: 'Admin' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', role: 'User' }
        ]
      },
      {
        organization: 'Org2',
        contact: [
          { id: 3, name: 'Alice Brown', email: 'alice.brown@example.com', phone: '111-222-3333', role: 'Manager' },
          { id: 4, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '444-555-6666', role: 'Developer' }
        ]
      }
  
    ];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngonit call', () => {
    // spyOn(component,'ngOnInit')
    component.ngOnInit();
    expect(component.profileForm).toBeDefined();
    expect(component.profileForm.controls['name']).toBeDefined();
    expect(component.profileForm.controls['lastName']).toBeDefined();
    expect(component.profileForm.controls['organization']).toBeDefined();
    expect(component.profileForm.controls['email']).toBeDefined();
    expect(component.profileForm.controls['phone']).toBeDefined();
    expect(component.profileForm.controls['another']).toBeDefined();
    expect(component.profileForm.controls['role']).toBeDefined();
    expect(component.profileForm.controls['additionalRoles']).toBeDefined();
    expect(component.profileForm.controls['remark']).toBeDefined();
  });
  it('shou;d call cretae form group', () => {
    const formGroup = component.createanotherFormGroup();
    expect(formGroup instanceof FormGroup).toBeTruthy();
  });
  it('add medium form array', () => {
    const formArray: FormArray = component.mediumFormArray;
    expect(formArray).toBeTruthy(); // Ensure it's not null or undefined
    expect(formArray instanceof FormArray).toBeTrue(); // Ensure it's actually a FormArray
    // expect(formArray.controls.length).toBe(2);
  });
  it('should add a new phone FormGroup to the FormArray', () => {
    // Arrange
    const initialLength = component.mediumFormArray.length;

    // Act
    component.addPhone();

    // Assert
    expect(component.mediumFormArray.length).toBe(initialLength + 1); 
    expect(component.mediumFormArray.at(initialLength)).toBeTruthy(); // Ensure the new form group exists at the correct index
  });
  it('should remove a phone FormGroup from the FormArray', () => {
    

    const indexToRemove = 1;
    component.removePhone(indexToRemove);

 
    expect(component.mediumFormArray.at(indexToRemove)).toBeUndefined();
  });
  it('show all contact', () => {
    component.isActive = true;
    component.showAllContact();
    expect(component.isActive).toBeFalse;
    expect(component.completeContact).toHaveBeenCalled;
  });
  it('sorted contact', () => {
    
    component.isActive = false;
    component.sortedContact(data);
    expect(component.sorted).toEqual(data);
    expect(component.filtercontact).toHaveBeenCalled;
  });

  it('increment loopcount', () => {
    const count = component.loopCount;
    component.incrementLoopCount();
    expect(component.loopCount).toEqual(count + 1);
  });
  it('should edit calles', () => {
    component.editToggle = false;
    component.toogle = true;
    component.selectAll = true;
    component.Edit();
    expect(component.editToggle).toBeFalse;
    expect(component.toogle).toBeFalse;
    expect(component.selectAll).toBeTrue;
  });

  it('al check bx click', () => {
    component.selectAll = true;
    component.filtercontact = [
      {
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
        contact: [
          {
            id: 1,
            name: 'shami',
            email: 'viveksengar921927',
            phone: 2423535,
            role: 'developer',
          },
          {
            id: 2,
            name: 'vivek',
            email: 'viveksengar921927',
            phone: 35353,
            role: 'developer',
          },
        ],
      },
    ];

    component.allCheckBox();
    component.checkboxarray.forEach((contact: { checked: any }) => {
      expect(contact.checked).toBe(true);
    });
  });

  it('al check bx click', () => {
    component.selectAll = false;
  

    component.allCheckBox();
    component.checkboxarray.forEach((contact: { checked: any }) => {
      expect(contact.checked).toBe(false); 
    });
  });

  it('on check box change', () => {
    const selectrows = [
      {
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
        contact: [
          {
            id: 1,
            name: 'shami',
            email: 'viveksengar921927',
            phone: 2423535,
            role: 'developer',
          },
          {
            id: 2,
            name: 'vivek',
            email: 'viveksengar921927',
            phone: 35353,
            role: 'developer',
          },
        ],
      },
      
    ];
    component.able = false;
    component.onCheckboxChange('', 1, '', selectrows);
    console.log(selectrows);
    expect(component.able).toBeTrue;
  });
  it('on check box change', () => {
    const selectrows = [
      {
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
        contact: [
          {
            id: 1,
            name: 'shami',
            email: 'viveksengar921927',
            phone: 2423535,
            role: 'developer',
          },
          
        ],
      },
    ];
    component.able = false;
    component.onCheckboxChange('', 1, '', selectrows);
    console.log(selectrows);
    expect(component.able).toBeTrue;
  });


  it('test for view', () => {
    component.checkboxarray = [{ id: 1 }, { id: 2 }];
    
    spyOn(component, 'toggle');
    component.viewFormOpen(data, 0);
    expect(component.toogle).toBeTrue();
    expect(component.able).toBeFalse();
    expect(component.editToggle).toBeFalse();
    component.toggle(data.organization, data.id, data);
    expect(component.toggle).toHaveBeenCalled()
    expect(component.checkboxarray).toEqual(component.checkboxarray);
    expect(component.checkboxarray.length).toBe(2);

    for (let i = 0; i < component.checkboxarray.length; i++) {
      component.checkboxarray[i].checked = false;
      expect(component.checkboxarray[i].checked).toBeFalse();
    }
  });
  it("test for the edit",()=>{

     const data=null
      
    component.editFormOpen(data,'',contact)
    expect(component.selectAll).toBeFalse



  })
  it("test for edit  checkboxarray lenght>1",()=>{
    const data={
      id:1
    }
    component.checkboxValues = [{ id: 1 }, { id: 2 }];
   
component.editFormOpen(data,'',contact)
expect(component.selectAll).toBeFalse


  })
  it("should else part of edit from",()=>{
    
   
    spyOn(component,'toggle')
    component.editFormOpen(data,0,contact)
    expect(component.toogle).toBeFalse
    component.toggle(data.organization,0,data)

  })
  it("shouldcall serch org",()=>{
    const event={
      target:{
        value:""

      }
    }
    component.searchOrg(event)
    expect(component.org).toEqual('')
    

  })
 
  it('should navigate to organization component with correct state', () => {
    const mockData = { orgId: 2 };


    const navigateSpy = spyOn(router, 'navigate');

    component.goToComponent2(mockData);

    expect(navigateSpy).toHaveBeenCalledWith(['/organization/organization'], {
      state: { item: component.allContact.find((org: any) => org.id === mockData.orgId), id: mockData.orgId }
    });
  });
  it('should filter allContact based on search text', () => {
    component.allContact = [
      {
        organization: 'Org1',
        contact: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' }
        ]
      },
      {
        organization: 'Org2',
        contact: [
          { id: 3, name: 'Alice Brown' },
          { id: 4, name: 'Bob Johnson' }
        ]
      },
    ];
    const searchText = 'john';
    component.search({ target: { value: searchText } });

   
    expect(component.filtercontact.length).toBe(2); 
    
    expect(component.filtercontact[0].contact[0].name.toLowerCase()).toContain(searchText); // Check if name contains search text
   
  });

  it('should handle empty search text', () => {

    const searchText = '';

    component.search({ target: { value: searchText } });

    expect(component.filtercontact.length).toBe(component.allContact.length); // All organizations should be included
  });

  it('should delete contacts from filtercontact correctly', () => {
    
    const allSecterdRows = [
      { organization: 'Org1', id: 2 },
      { organization: 'Org2', id: 4 }  
    ];

    component.delete(allSecterdRows);

   
    expect(component.filtercontact[0].contact.length).toBe(1);
    expect(component.filtercontact[1].contact.length).toBe(1); 

  
  });
  it('should update viewData and filtercontact correctly', () => {

    
    const formValues = {
      name: 'Updated Name',
      email: 'updated.email@example.com',
      phone: '999-888-7777',
      role: 'Updated Role'
    };
    const formGroup: FormGroup = fb.group(formValues);
    component.viewData = {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      role: 'User',
      organization: 'Org1'
    };
    component.editData(formGroup);
    expect(component.viewData.name).toBe('Updated Name');
    expect(component.viewData.email).toBe('updated.email@example.com');
    expect(component.viewData.phone).toBe('999-888-7777');
    expect(component.viewData.role).toBe('Updated Role');
    const updatedContact = component.filtercontact.find((org: { organization: string; }) => org.organization === 'Org1')?.contact.find((contact: { id: number; }) => contact.id === 2);
    expect(updatedContact).toBeDefined();
    expect(updatedContact!.name).toBe('Updated Name');
    expect(updatedContact!.email).toBe('updated.email@example.com');
    expect(updatedContact!.phone).toBe('999-888-7777');
    expect(updatedContact!.role).toBe('Updated Role');
    expect(component.able).toBe(false);
  });
  it("should call for close",()=>{
    component.checkboxData = [ 'item1', 'item2', 'item3' ];
     component.close()
     expect(component.editToggle).toBeFalse
     expect(component.toogle).toBeFalse
     expect(component.checkboxData.length).toBe(2); 
   
  })
it("should calll clear",()=>{
  component.clear()
  expect(component.profileForm).toBeNull
})
it('should add data to filtercontact correctly when profileForm is valid', () => {


  component.profileForm = fb.group({
    name: ['New Contact'],
    email: ['new.contact@example.com'],
    phone: ['999-888-7777'],
    role: ['Tester'],
    organization: ['Org1'] 
  });

  component.addData();

  const updatedContact = component.filtercontact.find((org: { organization: string; }) => org.organization === 'Org1')?.contact.find((contact: { name: string; }) => contact.name === 'New Contact');
  expect(updatedContact).toBeDefined();
  expect(updatedContact!.email).toBe('new.contact@example.com');
  expect(updatedContact!.phone).toBe('999-888-7777');
  expect(updatedContact!.role).toBe('Tester');

});
it("complete contact call when filrtecontact nul",()=>{
  component.filtercontact=null
  component.completeContact(component.filtercontact)
  expect(component.rowData).toEqual(component.rowData)

})
it("add toogle when contact =null",()=>{

let contact=  
  { id: 3, name: 'Alice Brown', email: 'alice.brown@example.com', phone: '111-222-3333', role: 'Manager' }
let i=0;
component.profileForm = fb.group({
  organization: ['Org1'], // Assuming 'Org1' is the organization
  name: [''], // Will be patched with firstName
  lastName: [''], // Will be patched with lastName
  email: [''],
  phone: [''],
  role: ['']
});
component.toggle(data,i,contact)
let fullName = contact.name;
      const names = fullName!.split(' ');
      const firstName = names[0];
      const lastName = names!.slice(1).join(' ');
      component.  profileForm.get('organization')!.patchValue(data);
      component.  profileForm.get('name')!.patchValue(firstName);
    component.  profileForm.get('lastName')!.patchValue(lastName);
      component.   profileForm.get('email')!.patchValue(contact.email);
    component.  profileForm.get('phone')!.patchValue(contact.phone);

    component.profileForm.get('organization')!.disable();
expect(component.formheading).toEqual('EDIT CONTACT')

})
it("add toogle",()=>{
  

 let contact= ''
  
 let i=0;

 component.isActive=true
 component.toggle(data,i,contact)
 expect(component.formheading).toEqual('ADD CONTACT')
 expect(component.isActive).toBe(false);
 
 })
it(" else block of all selecte d rows",()=>{
   const selectedrows=[{id:1,
   }
  ,{
    id:2
  }]
  component.onCheckboxChange("","","",selectedrows)
  expect(component.able).toBeFalse
})
})  