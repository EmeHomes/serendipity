import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeployComponent } from './user-deploy.component';

describe('UserDeployComponent', () => {
  let component: UserDeployComponent;
  let fixture: ComponentFixture<UserDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
