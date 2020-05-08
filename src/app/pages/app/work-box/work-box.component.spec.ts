import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBoxComponent } from './work-box.component';

describe('WorkBoxComponent', () => {
  let component: WorkBoxComponent;
  let fixture: ComponentFixture<WorkBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
