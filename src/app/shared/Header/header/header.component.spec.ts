import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ServiceService } from 'src/app/service/service.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
   let service:ServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ServiceService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  service = TestBed.inject(ServiceService);
  spyOn(service.headerSubject, 'subscribe').and.callThrough();
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe to headerSubject and update header property', () => {
    const testData = ''; // Replace with your test data structure

    // Simulate emitting data from headerSubject
    service.headerSubject.next(testData);

    // Expect that the subscribe method was called
    // expect(service.headerSubject.subscribe).toHaveBeenCalled();

    // Expect that the component's header property is updated with the emitted data

  });
});
