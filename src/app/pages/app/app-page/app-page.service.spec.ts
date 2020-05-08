import { TestBed } from '@angular/core/testing';

import { AppPageService } from './app-page.service';

describe('AppPageService', () => {
  let service: AppPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
