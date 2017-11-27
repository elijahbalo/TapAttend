import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomePage} from '../pages/home/home';
import { SignInPage} from '../pages/signIn/signIn';
import { CoursePage} from '../pages/course/course';
import { AttendancePage} from '../pages/attendance/attendance';
import { routes} from './app.router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    HomePage,    
    AttendancePage,
    CoursePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
