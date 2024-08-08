import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchdulelistComponent } from './schdulelist.component';

describe('SchdulelistComponent', () => {
  let component: SchdulelistComponent;
  let fixture: ComponentFixture<SchdulelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchdulelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchdulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
