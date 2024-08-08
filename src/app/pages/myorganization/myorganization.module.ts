import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyorganizationRoutingModule } from './myorganization-routing.module';
import { ProcessComponent } from './process/process.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { HumantaskComponent } from './humantask/humantask.component';
import { WorkflowsexecutionComponent } from './workflowsexecution/workflowsexecution.component';

import { SolutionareaComponent } from './solutionarea/solutionarea.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrgDetailComponent } from './organizations/org-detail/org-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingComponent } from '../setting/setting.component';
import { TestDirectiveDirective } from 'src/app/directive/test-directive.directive';




@NgModule({
  declarations: [
    ProcessComponent,
    WorkflowComponent,
    HumantaskComponent,
    WorkflowsexecutionComponent,
    SolutionareaComponent,
    OrganizationsComponent,
    ContactsComponent,
    OrgDetailComponent,   
    SettingComponent,
    TestDirectiveDirective

   
    
    
   
  ],providers:[


  ],
  imports: [

    CommonModule,
    MyorganizationRoutingModule,
    IconsModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    SharedModule,

  ]
})
export class MyorganizationModule { }
