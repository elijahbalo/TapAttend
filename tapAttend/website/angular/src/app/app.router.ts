import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from '../pages/login/login';
import { AppComponent } from './app.component';
import { HomePage} from '../pages/home/home';
import { CoursePage} from '../pages/course/course';
import { AttendancePage} from '../pages/attendance/attendance';

export const router: Routes = [
     {path: '', redirectTo: 'home', pathMatch: 'full'}, 
     {path: 'home', component: HomePage},
     {path: 'course', component: CoursePage},
     {path: 'login', component: LoginPage},
     {path: 'attendance', component:AttendancePage} 

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);