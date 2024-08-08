import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumantaskComponent } from './humantask.component';

describe('HumantaskComponent', () => {
  let component: HumantaskComponent;
  let fixture: ComponentFixture<HumantaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumantaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumantaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
