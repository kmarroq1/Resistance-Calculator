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

  it('should test boundaries for first band', () => {
    expect(service.calculateResistance(0, 1, 1, 1, 1)).toEqual(
      '11 Ohms +/- 1%'
    );
    expect(service.calculateResistance(5, 1, 1, 1, 1)).toEqual(
      '511 Ohms +/- 1%'
    );
    expect(service.calculateResistance(9, 1, 1, 1, 1)).toEqual(
      '911 Ohms +/- 1%'
    );

    expect(function () {
      service.calculateResistance(-1, 1, 1, 1, 1);
    }).toThrowError('Invalid band value');
    expect(function () {
      service.calculateResistance(10, 1, 1, 1, 1);
    }).toThrowError('Invalid band value');
  });

  it('should test boundaries for second band', () => {
    expect(service.calculateResistance(1, 0, 1, 1, 1)).toEqual(
      '101 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 5, 1, 1, 1)).toEqual(
      '151 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 9, 1, 1, 1)).toEqual(
      '191 Ohms +/- 1%'
    );

    expect(function () {
      service.calculateResistance(1, -1, 1, 1, 1);
    }).toThrowError('Invalid band value');
    expect(function () {
      service.calculateResistance(1, 10, 1, 1, 1);
    }).toThrowError('Invalid band value');
  });

  it('should test boundaries for third band', () => {
    expect(service.calculateResistance(1, 1, 0, 1, 1)).toEqual(
      '110 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 1, 5, 1, 1)).toEqual(
      '115 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 1, 9, 1, 1)).toEqual(
      '119 Ohms +/- 1%'
    );

    expect(function () {
      service.calculateResistance(1, 1, -1, 1, 1);
    }).toThrowError('Invalid band value');
    expect(function () {
      service.calculateResistance(1, 1, 10, 1, 1);
    }).toThrowError('Invalid band value');
  });

  it('should test boundaries for fourth band', () => {
    expect(service.calculateResistance(1, 1, 1, 1000, 1)).toEqual(
      '1.11e+5 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 1, 1, 1000000, 1)).toEqual(
      '1.11e+8 Ohms +/- 1%'
    );
    expect(service.calculateResistance(1, 1, 1, 1000000000, 1)).toEqual(
      '1.11e+11 Ohms +/- 1%'
    );

    expect(function () {
      service.calculateResistance(1, 1, 1, -1, 1);
    }).toThrowError('Invalid multiplier value');
  });

  it('should test boundaries for fifth band', () => {
    expect(service.calculateResistance(1, 1, 1, 1, 0.05)).toEqual(
      '111 Ohms +/- 0.05%'
    );
    expect(service.calculateResistance(1, 1, 1, 1, 10)).toEqual(
      '111 Ohms +/- 10%'
    );

    expect(function () {
      service.calculateResistance(1, 1, 1, 1, 0);
    }).toThrowError('Invalid tolerance value');
    expect(function () {
      service.calculateResistance(1, 1, 1, 1, 21);
    }).toThrowError('Invalid tolerance value');
  });

  it('should test for zero ohms', () => {
    expect(service.calculateResistance(0, 0, 0, 1, 0.05)).toEqual(
      '0 Ohms'
    );
  });

  it('should test biggest resistance', () => {
    expect(service.calculateResistance(9, 9, 9, 1000000000, 10)).toEqual(
      '9.99e+11 Ohms +/- 10%'
    );
  });

  it('should test mid-range resistance', () => {
    expect(service.calculateResistance(5, 5, 5, 100000000, 10)).toEqual(
      '5.55e+10 Ohms +/- 10%'
    );
  });
});
