import { TestBed } from '@angular/core/testing';

import { ResistanceCalculatorService } from './resistance-calculator.service';

describe('ResistanceCalculatorService', () => {
  let service: ResistanceCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistanceCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
