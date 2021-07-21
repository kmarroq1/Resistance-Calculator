import { browser, by, element } from 'protractor';

export class AppPage {
  loadPage() {
    return browser.get('/') as Promise<any>;
  }

  selectOption(id: string, optionValue: string) {
    element(by.id(id)).$(optionValue).click();
  }

  getTextByCss(css:string) {
    return element(by.css(css)).getText() as Promise<string>;
  }

  getTextById(id:string) {
    return element(by.id(id)).getText() as Promise<string>;
  }

  clickById(whereTo:string) {
    element(by.id(whereTo)).click();
  }
}
