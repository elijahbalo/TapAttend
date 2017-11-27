import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-attend',
  templateUrl: 'attend.html'
})
export class AttendPage {
  constructor( public NavCtrl: NavController,
    public NavParams: NavParams) {

  }
}
