import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareIconComponent } from 'src/app/shared/share-icon/share-icon.component';

import { ColDef, GridOptions } from 'ag-grid-community';

import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css'],
})
export class MytaskComponent implements OnInit {
 
  formDataList: any[] = [];
  taskForm!: FormGroup;
  isValid: boolean = false;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.service.headerNav({ module: 'Mymenu', links: 'Mytask' });
  }

  ngOnInit(): void {
    setTimeout(()=>{
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    })
    this.taskForm = this.fb.group({
      ID: ['', Validators.required],
      Task: ['', Validators.required],
      workflow: [''],
      startdate: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.getData();
    console.log(this.rowData);
  }

  isToggled: boolean = false;
  isEdit: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }
  formData: any = {
    ID: '',
    Task: '',
    workflow: '',
    startdate: '',
    duedate: '',
    priority: '',
    status: '',
  };
  rowData: any;
  getData() {
    const storedData = localStorage.getItem('formDataList');
    this.formDataList = storedData ? JSON.parse(storedData) : [];
    this.rowData = this.formDataList;
  }

  saveFormData(): void {
    if (this.taskForm.valid) {
      const confirmed = confirm('Are you sure you want to add this task?');
      if (confirmed) {
        const formData = this.taskForm.value;
        this.formDataList.push({ ...formData });
        localStorage.setItem('formDataList', JSON.stringify(this.formDataList));
        this.taskForm.reset(); // Reset the form
        this.isToggled = !this.isToggled;
      }
    } else {
      console.log('Form is invalid');
      this.isValid = true;
    }
    this.getData();
  }
  newData={
    
      ID: '43243324',
      Task: 'sdfsdg',
      workflow: 'fgfdfgf',
      startdate: '',
      duedata: '',
      priority: 'high',
      status: 'gghhfg',
    
  }
 
  deleteFormData(id: any) {
    const confirmed = confirm("'Are you sure delete the data?'");
    console.log(id);
    if (confirmed) {
      const index = this.formDataList.findIndex((data) => data.ID === id);
      console.log(this.formDataList.length);
      if (index !== -1) {
        this.formDataList.splice(index, 1);
        localStorage.setItem('formDataList', JSON.stringify(this.formDataList));
      }
      console.log(this.formDataList);
    }
    this.getData();
  }

  isEdittoogle(id: any): void {
    this.isEdit = !this.isEdit;

    if (this.isEdit) {
      const selectedTask = this.formDataList.find((data) => data.ID === id);
      if (selectedTask) {
        this.taskForm.patchValue(selectedTask);
      }
    } else {
      this.taskForm.reset();
    }
  }
  gridOptions: GridOptions = {
    context: {
      parentComponent: this,
      parent: 'tasks',
    },
  };
  onCellClicked(event: any) {
    if (event.colDef.field === 'delete') {
      this.deleteFormData(event.data.ID);
    }
  }
  editData(id: any): void {
    this.isEdit = !this.isEdit;
    const confirmed = confirm('Are you sure you want to confirm to edit data?');
    if (confirmed) {
      const formData = this.taskForm.getRawValue();
      const index = this.formDataList.findIndex((data) => id === data.ID);
      if (index !== -1) {
        this.formDataList[index] = { ...formData };
        localStorage.setItem('formDataList', JSON.stringify(this.formDataList));
      }
      this.taskForm.reset();
    }
    this.getData();
  }
  context = {
    parentComponent: this,
  };
  colDefs: ColDef[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
    },
    { headerName: 'ID', field: 'ID' },
    { headerName: 'Task', field: 'Task' },
    { headerName: 'workflow', field: 'workflow' },
    { headerName: 'startDtae', field: 'startdate' },
    { headerName: 'Duedate', field: 'duedate' },
    {
      headerName: 'Action',
      field: 'delete',
      cellRendererFramework: ShareIconComponent,
      cellRendererParams: {
        onDeleteClicked: this.deleteFormData.bind(this),
        onEditClicked: this.isEdittoogle.bind(this),
      },
    },
  ];
}
