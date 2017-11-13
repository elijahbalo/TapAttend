import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController) {
   // this.tabBarElement = document.querySelector('.tabbar');
    }
    nextClick(){
     this.navCtrl.push(SignUpPage2);
  }
  
  
 // ionViewDidLoad() {
   // setTimeout(() => this.splash = false, 4000);
  //}
  
 
}