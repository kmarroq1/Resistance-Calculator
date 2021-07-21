import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Registration Tests', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.loadPage();
  });

  it('should default to zero ohms', function() {
    expect(page.getTextById('message')).toEqual('Resistance: 0 Ohms');
  });

  it('should default to all black and brown tolerance', function() {
    expect(page.getTextById('test')).toEqual('test: black,black,black,black,brown');
  });

  it('should stay as zero ohms', function() {
    page.selectOption('band3', '[value~="brown"]');
    expect(page.getTextById('message')).toEqual('Resistance: 0 Ohms');

    page.selectOption('band4', '[value~="red"]');
    expect(page.getTextById('message')).toEqual('Resistance: 0 Ohms');
  });

  it('should change selected band values', function() {
    page.selectOption('band0', '[value~="brown"]');
    page.selectOption('band1', '[value~="red"]');
    page.selectOption('band2', '[value~="orange"]');
    page.selectOption('band3', '[value~="yellow"]');
    page.selectOption('band4', '[value~="green"]');
    expect(page.getTextById('test')).toEqual('test: brown,red,orange,yellow,green');
    expect(page.getTextById('message')).toEqual('Resistance: 1.23e+6 Ohms +/- 0.5%');
  });
});
