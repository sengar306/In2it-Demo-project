import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { IconsModule } from '../icons/icons.module';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [MytaskComponent],
      imports:[IconsModule],
      // providers: [FormBuilder],
    }).compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('headrenav call',()=>{
    const testData = { module: 'someModule', links: 'someLinks' };

    service.headerNav(testData)
    service.headerSubject.subscribe((data)=>{

         expect(data).toEqual(testData)

    })
   
  })

  })


