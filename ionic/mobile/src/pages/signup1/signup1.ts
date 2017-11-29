import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignPage } from '../sign/sign';
import { SignUpPage2 } from '../signup2/signup2';


@Component({
  selector: 'page-signup1',
  templateUrl: 'signup1.html'
})

export class SignUpPage1 {
    //splash = true;
    //secondPage = SecondPagePage;
  username;
  password;
  firstname;
  lastname;
  studentId;
  email;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,) {
   // this.tabBarElement = document.querySelector('.tabbar');
    if (navParams.get('username')) {
      this.username = navParams.get('username');
    }
     if (navParams.get('password')) {
      this.password = navParams.get('password');
    }
               }
    nextClick(){
     this.navCtrl.push(SignUpPage2,{
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname:this.lastname,
      studentId:this.studentId,
      email:this.email
     });
  }
  
  
 // ionViewDidLoad() {
   // setTimeout(() => this.splash = false, 4000);
  //}
  
 
}