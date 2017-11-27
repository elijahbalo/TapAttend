import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../courses/courses';
import { UserService } from './../../services/users.service';
import { AttendPage } from '../attend/attend';
import { ProfilePage } from '../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 // tabBarElement: any;
 // splash = true;
  currentUser;
  constructor(public navCtrl: NavController,public userService: UserService,) {
    //this.tabBarElement = document.querySelector('.tabbar');
           
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
   
  
 
    }
    courseClick(){
     this.navCtrl.push(CoursePage);
  }
  
  attendClick(){
   this.navCtrl.push(AttendPage);
 }

  profileClick(){
  this.navCtrl.push(ProfilePage);
}
 
 // for splash page  ------------------------
/*
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
  */
  //--------------------------------
}