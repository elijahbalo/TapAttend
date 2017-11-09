import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from '../signup/signup';


@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html'
})

export class SignPage {
    splash = true;
    //secondPage = SecondPagePage;
  
  constructor(public navCtrl: NavController) {
   // this.tabBarElement = document.querySelector('.tabbar');
    }
    homeClick(){
     this.navCtrl.push(TabsPage);
  }
  
  signUpClick(){
    this.navCtrl.push(SignUpPage);
 }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
  
 
}