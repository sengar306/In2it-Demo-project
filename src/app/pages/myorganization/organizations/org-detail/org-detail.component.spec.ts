import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrgDetailComponent } from './org-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrgDetailComponent', () => {
  let component: OrgDetailComponent;
  let fixture: ComponentFixture<OrgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgDetailComponent ],
      imports: [ NgbModule ,RouterTestingModule] 
    
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.inputData = {
      contact: ""
    };

    // Call ngOnInit explicitly
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("openfile",()=>{
    const event={
      data:""
    }
    component.openProfile(event)
    expect(component.item).toEqual(event.data)
  })
  it("closeProfile",()=>{
    component.closeProfile()
    expect(component.profile).toBeFalse
  })
  it("ngonit",()=>{
  
    component.ngOnInit()
    expect(component.rowData).toEqual(component.inputData.contact);
  })
});
