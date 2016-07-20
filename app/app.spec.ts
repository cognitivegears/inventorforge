import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {MyApp} from './app';
import {TabsPage} from './pages/tabs/tabs';


let myApp: MyApp = null;

class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public close(): any {
    return true;
  }

  public setRoot(): any {
    return true;
  }
}

describe('MyApp', () => {

  beforeEach(() => {
    let mockClass: any = (<any>new MockClass());
    myApp = new MyApp(mockClass);
  });


  it('initialises with a root page', () => {
    expect(myApp['rootPage']).not.toBe(null);
//    expect(myApp['rootPage'] instanceof TabsPage).toBeTruthy();
  });

  it('initialises with an app', () => {
    expect(myApp['app']).not.toBe(null);
  });

}); 
