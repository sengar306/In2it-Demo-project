import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  // Include HttpClientModule in imports
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it("get user",()=>{
  //   const testData= { };

  // })
});
