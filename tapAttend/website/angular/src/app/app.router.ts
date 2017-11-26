import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage} from '../pages/home/home';
import { CoursePage} from '../pages/course/course';
import { CourseListPage} from '../pages/courseList/courseList';
import {SignInPage} from '../pages/signIn/signIn';
import {SignUpPage} from '../pages/signUp/signUp';
import {StudentListPage} from '../pages/studentList/studentList';
import {StudentPage} from '../pages/student/student';
import {AccountPage} from '../pages/account/account';
import { NavComponent } from '../app/navbar/navbar.component';

export const router: Routes = [
     {path: '', redirectTo: 'home', pathMatch: 'full'}, 
     {path: 'home', component: HomePage},
     {path: 'course', component: CoursePage},
     {path: 'signIn', component: SignInPage},
     {path: 'signUp', component: SignUpPage},
     {path: 'studentPage', component: StudentPage},
     {path: 'studentListPage', component: StudentListPage},
     {path: 'courseListPage', component: CourseListPage},
     {path: 'accountPage', component: AccountPage},
     {path: 'navComponent', component: NavComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);