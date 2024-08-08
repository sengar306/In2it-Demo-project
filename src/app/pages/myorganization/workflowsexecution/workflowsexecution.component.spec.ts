import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsexecutionComponent } from './workflowsexecution.component';

describe('WorkflowsexecutionComponent', () => {
  let component: WorkflowsexecutionComponent;
  let fixture: ComponentFixture<WorkflowsexecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowsexecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowsexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
