import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementFranchiseeComponent } from './management-franchisee.component';

describe('ManagementFranchiseeComponent', () => {
  let component: ManagementFranchiseeComponent;
  let fixture: ComponentFixture<ManagementFranchiseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementFranchiseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementFranchiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
