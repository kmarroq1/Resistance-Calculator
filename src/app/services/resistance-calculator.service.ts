import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResistanceCalculatorService {
  private firstBand: number;
  private secondBand: number;
  private thirdBand: number;
  private multiplier: number;
  private tolerance: number;
  private resistorDescription: string;

  constructor() {
    this.firstBand = 0;
    this.secondBand = 0;
    this.thirdBand = 0;
    this.multiplier = 1;
    this.tolerance = 0;
    this.resistorDescription = '';
  }

  calculateResistance(
    newFirstBand: number,
    newSecondBand: number,
    newThirdBand: number,
    newMultiplier: number,
    newTolerance: number
  ): string {
    if (
      newFirstBand < 0 ||
      newFirstBand > 9 ||
      newSecondBand < 0 ||
      newSecondBand > 9 ||
      newThirdBand < 0 ||
      newThirdBand > 9
    ) {
      throw new Error('Invalid band value');
    } else if (newMultiplier < 0) {
      throw new Error('Invalid multiplier value');
    } else if (newTolerance < 0.05 || newTolerance > 20) {
      throw new Error('Invalid tolerance value');
    }
    this.firstBand = newFirstBand;
    this.secondBand = newSecondBand;
    this.thirdBand = newThirdBand;
    this.multiplier = newMultiplier;
    this.tolerance = newTolerance;

    var calculatedResistance = this.calculateBandTotal() * this.multiplier;
    this.resistorDescription =
      this.significantFigures(calculatedResistance) +
      this.determineUnits() +
      ' +/-' +
      this.tolerance +
      '%';

    return this.resistorDescription;
  }

  calculateBandTotal(): number {
    var bandTotal =
      this.firstBand * 100 + this.secondBand * 10 + this.thirdBand;
    return bandTotal;
  }

  significantFigures(resistanceCalculation: number): string {
    if (resistanceCalculation < 0) {
      throw new Error('Invalid calculation');
    }
    var newBandTotal: number = this.calculateBandTotal();
    var digits: number = newBandTotal.toString().length;
    var preciseCalculation: string = resistanceCalculation.toPrecision(digits);
    return preciseCalculation;
  }

  determineUnits(): string {
    var unit: string = '';
    if (this.firstBand === 0 && this.secondBand === 0 && this.thirdBand === 0) {
      unit = ' Ohms';
    } else if (
      this.multiplier === 1000 ||
      this.multiplier === 10000 ||
      this.multiplier === 100000
    ) {
      unit = 'k Ohms';
    } else if (
      this.multiplier === 1000000 ||
      this.multiplier === 10000000 ||
      this.multiplier === 100000000
    ) {
      unit = 'M Ohms';
    } else if (this.multiplier === 1000000000) {
      unit = 'G Ohms';
    } else {
      unit = ' Ohms';
    }
    return unit;
  }
}
