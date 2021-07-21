import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResistanceCalculatorService } from 'src/app/services/resistance-calculator.service';
import { FormsModule } from '@angular/forms';
import { ResistorComponent } from './resistor.component';

describe('ResistorComponent', () => {
  let form: ResistanceCalculatorService;
  let component: ResistorComponent;
  let fixture: ComponentFixture<ResistorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ResistorComponent],
      providers: [ResistanceCalculatorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create resistor component', () => {
    expect(component).toBeTruthy();
  });

  it('should have sigFigBandColors', () => {
    expect(component.sigFigBandColors.toString()).toEqual(
      'black,brown,red,orange,yellow,green,blue,violet,grey,white'
    );
  });

  it('should have multiplier band colors', () => {
    expect(component.multiplier.toString()).toEqual(
      '1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,0.1,0.01,black,brown,red,orange,yellow,green,blue,violet,grey,white,gold,silver'
    );
  });

  it('should have tolerance band colors', () => {
    expect(component.tolerance.toString()).toEqual(
      '1,2,0.5,0.25,0.1,0.05,5,10,brown,red,green,blue,violet,grey,gold,silver'
    );
  });

  it('should have default resistance displayed', () => {
    expect(component.resistanceDisplay).toEqual(
      '0 Ohms'
    );
  });

  it('should have defult band combination', () => {
    expect(component.bandCombination.toString()).toEqual('black,black,black,black,brown');
  });

  it('should successfully change band combination displayed', () => {
    component.bandCombination.splice(0, component.bandCombination.length);
    component.bandCombination.push('brown');
    component.bandCombination.push('red');
    component.bandCombination.push('orange');
    component.bandCombination.push('green');
    component.bandCombination.push('blue');
    component.onChange();
    expect(component.resistanceDisplay).toEqual('1.23e+7 Ohms +/- 0.25%');
  });

  it('should display error and undefined values', () => {
    component.bandCombination.splice(0, component.bandCombination.length);
    component.onChange();
    expect(component.resistanceDisplay).toEqual('Error: Invalid band value');

    component.bandCombination.push('brown');
    component.bandCombination.push('red');
    component.bandCombination.push('orange');
    component.onChange();
    expect(component.resistanceDisplay).toEqual('NaN Ohms +/- undefined%');

    component.bandCombination.push('green');
    component.onChange();
    expect(component.resistanceDisplay).toEqual('1.23e+7 Ohms +/- undefined%');
  });
});
