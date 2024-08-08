import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamworkComponent } from './myteamwork.component';

describe('MyteamworkComponent', () => {
  let component: MyteamworkComponent;
  let fixture: ComponentFixture<MyteamworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyteamworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
});
});
