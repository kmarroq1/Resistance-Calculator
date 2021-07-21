import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Registration Tests', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.loadPage();
  });

  it('should default to zero ohms', function() {
    expect(page.getTextById('message')).toEqual('Resistor 0 Ohms');
  });

  it('should default to all black and brown tolerance', function() {
    expect(page.getTextById('test')).toEqual('test: black,black,black,black,brown');
  });
});
