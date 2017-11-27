import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
*/
import { AboutPage } from '../pages/about/about';
import { AddCoursePage } from '../pages/addCourse/addCourse';

import { SettingsPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursePage} from '../pages/courses/courses';
import { AttendPage} from '../pages/attend/attend';
import { SignPage} from '../pages/sign/sign';
import { SignUpPage} from '../pages/signup/signup';
import { SignUpPage1} from '../pages/signup1/signup1';
import { SignUpPage2} from '../pages/signup2/signup2';

import { ProfilePage} from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AddCoursePage,
    AboutPage,
    SettingsPage,
    HomePage,
    CoursePage,
    AttendPage,
    SignPage,
    SignUpPage,
    SignUpPage1, 
    SignUpPage2,    
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddCoursePage,
    SettingsPage,
    HomePage,
    CoursePage,
    AttendPage,
    SignPage,
    SignUpPage,
    SignUpPage1, 
    SignUpPage2,        
    ProfilePage,    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
