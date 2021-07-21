import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Routing Tests', function() {
  let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
      page.loadPage();
    });

  it('should have a welcome title', function() {
    expect(page.getTextById('pageTitle')).toEqual('The 5-Band Resistance Calculator');
  });
});
