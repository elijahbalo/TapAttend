import { Component } from '@angular/core';

// these are where the pages are going to, the links to the page
import { AboutPage } from '../about/about';
import { SettingsPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // creating the tabs 
  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
