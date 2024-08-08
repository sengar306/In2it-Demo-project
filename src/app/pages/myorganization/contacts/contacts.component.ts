import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ColDef, GridOptions } from 'ag-grid-community';
// import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  searchText: any;
  allContact: any;
  contacts: any;
  loopCount: number = 0;
  contactNames: string[] = [];
  profileForm!: FormGroup;
  showFields: boolean = false;
  filter!: boolean;
  active!: boolean;
  sorted!: any;
  checkboxValues: any = 0;
  able: boolean = false;
  toogle: boolean = false;
  isActive!: boolean;
  formheading!: any;
  editdata!: any;
  editToggle: boolean = false;
  viewData!: any;
  viewIndex!: any;
  checkboxarray: any = [];

  isChecked: boolean = false;
  checkboxData!: any;
  checkedCount: any = 0;
  contact!: any;
  formData: any;
  selectAll!: any;
  applyWhiteBackground: boolean = false;
  rowData: any;
  gridOption: GridOptions = {};

  constructor(
    private service: ServiceService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.service.contactSubject.subscribe((data: any) => {
      this.allContact = data;
    });
  }
  totalCount!: number;
  countContacts() {
    this.totalCount = 0;

    this.allContact.forEach((org: any) => {
      this.totalCount += org.contact.length;
    });
    console.log(this.allContact)
  }
  gridOptions: GridOptions = {
    context: { parentComponent: this, parent: 'contacts' },
  };  
  newData={
      id:1,
      name:"shami",
      email:"viveksengar921927",
      phone:2423535,
      role:"developer"
    
  }
  ngOnInit(): void {
    this.filtercontact = this.allContact;
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],

      organization: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      another: this.fb.array([]),
      role: [''],
      additionalRoles: [''],
      remark: [''],
    });
    this.countContacts();
    // setTimeout(() => {
    //   this.gridOption.api?.sizeColumnsToFit();
    // }, 0);
    this.completeContact(this.filtercontact);
    console.log(this.rowData);
  }

  createanotherFormGroup(): FormGroup {
    return this.fb.group({
      type: [''],
      number: [''],
    });
  }

  get mediumFormArray(): FormArray {
    return this.profileForm.get('another') as FormArray;
  }

  addPhone(): void {
    this.mediumFormArray.push(this.createanotherFormGroup());
  }
  filtercontact!: any;

  removePhone(i: any) {
    this.mediumFormArray.removeAt(i);
  }
  showAllContact() {
    this.filtercontact = this.allContact;
    this.isActive = false;
    this.completeContact(this.filtercontact);
  }

  sortedContact(data: any) {
    this.filtercontact = this.allContact.filter(
      (org: any) => org.organization === data
    );
    this.isActive = true;
    console.log(data);
    this.sorted = data;
    this.applyWhiteBackground = true;
    console.log(this.sorted); 
    this.checkboxarray.splice(2, this.checkboxarray.length);
    this.completeContact(this.filtercontact);
  }
  goToComponent2(data: any) {
    const item = this.allContact.find((org: any) => org.id === data.orgId);
    const id = data.orgId;
    this.route.navigate(['/organization/organization'], {
      state: { item, id },
    });
  }
  incrementLoopCount() {
    this.loopCount++;
  }

  toggle(data: any, i: any, contact: any) {
    this.selectAll = false;
    if (contact === '') {
      this.clear();
      this.editToggle = true;
      console.log(this.active);
      this.profileForm.get('organization')!.enable();
      if (this.isActive) {
        this.profileForm.get('organization')!.patchValue(this.sorted);
        console.log('active');
      }
      this.formheading = 'ADD CONTACT';
      this.isActive = false;
    } else {
      this.formheading = 'EDIT CONTACT';
      let fullName = contact.name;
      const names = fullName!.split(' ');
      const firstName = names[0];
      const lastName = names!.slice(1).join(' ');

      this.profileForm.get('organization')!.patchValue(data);
      this.profileForm.get('name')!.patchValue(firstName);
      this.profileForm.get('lastName')!.patchValue(lastName);
      this.profileForm.get('email')!.patchValue(contact.email);
      this.profileForm.get('phone')!.patchValue(contact.phone);
      this.profileForm.get('role')!.patchValue(contact.role);
      // this.profileForm.get('')!.disable();
      this.profileForm.get('organization')!.disable();
    }
    this.viewIndex = i;
    this.viewData = contact;
   console.log(this.viewIndex)
    console.log(data);
  }
  close() {
    this.editToggle = false;
    this.toogle = false;
    this.checkboxData.pop();
  }
  clear() {
    this.profileForm.reset();
  }

  addData() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);

      this.formData = this.profileForm.value;

      const abcOrganization = this.filtercontact.find(
        (org: any) => org.organization === this.formData.organization
      );

      if (abcOrganization) {
        console.log(this.formData);
        console.log(this.formData);
        abcOrganization.contact.push(this.formData);
      }
    }
    console.log(this.filtercontact);
    this.countContacts();
    this.completeContact(this.filtercontact);
    console.log(this.rowData);
    console.log(this.rowData);
  }
  completeContact(filtercontact: any) {
    if( filtercontact===null)
      {
    this.rowData=this.rowData
      }
      else
      {
    this.rowData = filtercontact.flatMap((org: any) =>
      org.contact.map((contact: any) => ({
        ...contact,
        organization: org.organization,
        orgId: org.id,
      }))
    );
  }
  }
  Edit() {
    this.editToggle = true;
    this.toogle = false;
    this.selectAll = false;
  }

  editData(form: FormGroup): void {
    
    this.viewData.name = form.get('name')!.value;
    this.viewData.email = form.get('email')!.value;
    this.viewData.phone = form.get('phone')!.value;
    this.viewData.role = form.get('role')!.value;
    this.editToggle = false;

    console.log(this.filtercontact);
    console.log(this.viewData);
    for (let i = 0; i < this.filtercontact.length; i++) {
      if (this.filtercontact[i].organization === this.viewData.organization) {
        for (let j = 0; j < this.filtercontact[i].contact.length; j++) {
          if (this.filtercontact[i].contact[j].id === this.viewData.id) {
            this.filtercontact[i].contact[j] = this.viewData;
          }
        }
      }
    }
    this.completeContact(this.filtercontact);
    this.able = false;
  }
  allSecterdRows!: any;
  onCheckboxChange(_event: any, _index: any, _data: any, selectedRow: any) {
    console.log(selectedRow);
    if (selectedRow.length == 1) {
      this.able = true;
      this.viewData = selectedRow[0];
    } else {
      this.able = false;
      this.toogle = false;
      this.editToggle = false;
    }
    this.allSecterdRows = selectedRow;
  }

  editFormOpen(data: any, i: any, contact: any) {
    this.selectAll = false;
    console.log(contact);
    if (!data || this.checkboxValues.length > 1) {
      console.error("'data' is undefined or null");
    } else {
      this.toogle = false;
      this.editToggle = true;
      // console.log(data.organization);
      this.toggle(data.organization, i, data);
    }
  }

  viewFormOpen(data: any, _id: any) {
    // console.log(contact)
    this.toogle = true;
    this.able = false;
    this.editToggle = false;

    this.toggle(data.organization, data.id, data);
    for (let i = 0; i < this.checkboxarray.length; i++) {
      this.checkboxarray[i].checked = false;
    }

  }

  delete(allSecterdRows: any) {
    for (let i = 0; i < allSecterdRows.length; i++) {
      const index = this.filtercontact.findIndex(
        (org: any) => org.organization === allSecterdRows[i].organization
      );
      console.log(this.filtercontact[index].contact);
      const contactIndex = this.filtercontact[index].contact.findIndex(
        (contact: any) => (contact.id = allSecterdRows[i].id)
      );

      this.filtercontact[index].contact.splice(contactIndex, 1);
    }
    this.completeContact(this.filtercontact);
    this.countContacts();
  }

  allCheckBox() {
    console.log(this.selectAll);
    console.log('select all', this.allContact);
    if (this.selectAll == true) {
      this.filtercontact.forEach((data: any) => {
        data.contact.forEach((contact: any) => {
          this.checkboxarray.push(contact);
          contact.checked = this.selectAll;
        });
      });
    } else {
      this.allContact.forEach((data: any) => {
        data.contact.forEach((contact: any) => {
          this.checkboxarray.push(contact);
          contact.checked = this.selectAll;
        });
      });
      this.checkboxarray.splice(0, this.checkboxarray.length);
    }
  }

  search(event: any) {
    this.searchText = event.target.value.toLowerCase();
    this.filtercontact = this.allContact.filter((item: any) => {
      const isContactMatch = item.contact.some((contact: any) => {
        return (
          contact.name && contact.name.toLowerCase().includes(this.searchText)
        );
      });
      return isContactMatch;
    });
  }
  org: any;
  searchOrg(event: any) {
    this.org = event.target.value.toLowerCase();
    this.filtercontact = this.allContact.filter((item: any) => {
      return item.organization.toLowerCase().includes(this.org);
    });
  }
  colDefs: ColDef[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
    },
    {
      headerName: 'Organization',
      field: 'organization',

    },
    { headerName: 'Name', field: 'name' },
    { headerName: 'role', field: 'role' },
    { headerName: 'phone', field: 'phone' },
    { headerName: 'email', field: 'email' },
  ];
}
