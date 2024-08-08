import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionareaComponent } from './solutionarea.component';

describe('SolutionareaComponent', () => {
  let component: SolutionareaComponent;
  let fixture: ComponentFixture<SolutionareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
