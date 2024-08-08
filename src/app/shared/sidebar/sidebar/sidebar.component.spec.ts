import { TestBed } from '@angular/core/testing';
import { ServiceService } from 'src/app/service/service.service';
import { SidebarComponent } from './sidebar.component';
 // Import your component

describe('YourComponent', () => {
  let component: SidebarComponent;
  let service: ServiceService; // Mocked service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      providers: [ServiceService] // Provide your service here
    }).compileComponents();                                 

    service = TestBed.inject(ServiceService); // Inject the mock service
    component = TestBed.createComponent(SidebarComponent).componentInstance;
  });

  it('should call headerNav on service with correct arguments', () => {
    const module = 'yourModule';
    const links = 'yourLinks';

    spyOn(service, 'headerNav'); // Spy on the headerNav method of the service

    component.headerNav(module, links);

    expect(service.headerNav).toHaveBeenCalledWith({ module, links });
  });
});
