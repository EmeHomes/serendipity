import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxPortalComponent } from './parallax-portal.component';

describe('ParallaxPortalComponent', () => {
  let component: ParallaxPortalComponent;
  let fixture: ComponentFixture<ParallaxPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
