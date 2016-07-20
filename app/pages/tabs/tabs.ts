import {Component} from '@angular/core';
import {SignPage} from '../sign/sign';
import {DoorPage} from '../door/door';
import {AboutPage} from '../about/about';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = SignPage;
    this.tab2Root = DoorPage;
    this.tab3Root = AboutPage;
  }
}
