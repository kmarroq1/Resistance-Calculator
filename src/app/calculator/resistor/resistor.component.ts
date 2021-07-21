import { Component, OnInit } from '@angular/core';
import { ResistanceCalculatorService } from 'src/app/services/resistance-calculator.service';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.css'],
})
export class ResistorComponent implements OnInit {
  public sigFigBandColors: string[];
  public multiplier: (number | string)[][];
  public tolerance: (number | string)[][];
  public resistanceDisplay: string;
  public bandCombination: string[];
  public firstThreeBands: number[];

  constructor(private resistanceService: ResistanceCalculatorService) {
    this.sigFigBandColors = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ];

    this.multiplier = [
      [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 0.1, 0.01],
      [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
        'gold',
        'silver',
      ],
    ];

    this.tolerance = [
      [1, 2, 0.5, 0.25, 0.1, 0.05, 5, 10],
      ['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver'],
    ];

    this.resistanceDisplay = '0 Ohms';
    this.bandCombination = ['black', 'black', 'black', 'black', 'brown'];
    this.firstThreeBands = new Array(3);
  }

  onChange() {
    let firstBand: number = this.sigFigBandColors.indexOf(
      this.bandCombination[0]
    );
    let secondBand: number = this.sigFigBandColors.indexOf(
      this.bandCombination[1]
    );
    let thirdBand: number = this.sigFigBandColors.indexOf(
      this.bandCombination[2]
    );

    let fourthBandColorIndex: number = this.multiplier[1].indexOf(
      this.bandCombination[3]
    );
    let fourthBand: number | string = this.multiplier[0][fourthBandColorIndex];

    let fifthBandColorIndex: number = this.tolerance[1].indexOf(
      this.bandCombination[4]
    );
    let fifthBand: number | string = this.tolerance[0][fifthBandColorIndex];

    try {
      this.resistanceDisplay = this.resistanceService.calculateResistance(
        firstBand,
        secondBand,
        thirdBand,
        fourthBand,
        fifthBand
      );
    } catch (exception) {
      this.resistanceDisplay = exception.toString();
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit(): void {}
}
