import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../courses/courses';
import { AttendPage } from '../attend/attend';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 // tabBarElement: any;
 // splash = true;

  constructor(public navCtrl: NavController) {
    //this.tabBarElement = document.querySelector('.tabbar');
    }
    courseClick(){
     this.navCtrl.push(CoursePage);
  }
  
  attendClick(){
   this.navCtrl.push(AttendPage);
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