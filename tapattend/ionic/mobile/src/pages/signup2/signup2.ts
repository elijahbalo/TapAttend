import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignPage } from '../sign/sign';


@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})

export class SignUpPage2 {
    //splash = true;
    //secondPage = SecondPagePage;
  
  constructor(public navCtrl: NavController) {
   // this.tabBarElement = document.querySelector('.tabbar');
    }
    nextClick(){
     this.navCtrl.push(SignPage);
  }
  
  
 // ionViewDidLoad() {
   // setTimeout(() => this.splash = false, 4000);
  //}
  
 
}