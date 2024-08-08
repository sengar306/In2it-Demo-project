import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessComponent } from './process/process.component';
import { WorkflowComponent } from './workflow/workflow.component';

import { WorkflowsexecutionComponent } from './workflowsexecution/workflowsexecution.component';
import { HumantaskComponent } from './humantask/humantask.component';
import { SolutionareaComponent } from './solutionarea/solutionarea.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'solutionarea', component: SolutionareaComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'workflow', component: WorkflowComponent },

  { path: 'workflowexecution', component: WorkflowsexecutionComponent },
  { path: 'humantask', component: HumantaskComponent },
  { path: 'organization', component: OrganizationsComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyorganizationRoutingModule {}
