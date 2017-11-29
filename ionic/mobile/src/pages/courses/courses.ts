import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AttendPage } from '../attend/attend';


@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursePage {
  constructor( public navCtrl: NavController,
    public NavParams: NavParams) {

  }
 
  attendClick(){
    this.navCtrl.push(AttendPage);
  }

}
