import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignPage } from '../sign/sign';
import { SignUpPage1 } from '../signup1/signup1';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignUpPage {
    //splash = true;
    //secondPage = SecondPagePage;
  username;
  password;
  constructor(public navCtrl: NavController) {
   // this.tabBarElement = document.querySelector('.tabbar');
    }
    nextClick(){
     this.navCtrl.push(SignUpPage1,{
      username: this.username,
      password: this.password
    
     });
  }
  
  
 // ionViewDidLoad() {
   // setTimeout(() => this.splash = false, 4000);
  //}
  
 
}