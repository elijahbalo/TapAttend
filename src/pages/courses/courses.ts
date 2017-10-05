import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursePage {
  constructor( public NavCtrl: NavController,
    public NavParams: NavParams) {

  }
 

}
