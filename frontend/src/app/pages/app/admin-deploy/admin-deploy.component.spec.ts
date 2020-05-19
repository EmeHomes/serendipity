import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeployComponent } from './admin-deploy.component';

describe('AdminDeployComponent', () => {
  let component: AdminDeployComponent;
  let fixture: ComponentFixture<AdminDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
