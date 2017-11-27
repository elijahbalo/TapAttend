import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomePage} from '../pages/home/home';
//import { MaterialModule } from '@angular/material';
import { MaterialModule } from './material.module';


import { SignInPage} from '../pages/signIn/signIn';
import { CoursePage} from '../pages/course/course';
import { AttendancePage} from '../pages/attendance/attendance';
import { routes} from './app.router';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    HomePage,    
    AttendancePage,
    //MaterialModule.forRoot(),
    CoursePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,    
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
