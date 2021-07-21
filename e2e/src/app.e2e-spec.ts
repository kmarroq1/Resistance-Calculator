import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.loadPage();
    expect(page.getTextByCss('app-root h1')).toEqual('The 5-Band Resistance Calculator');
  });
});
