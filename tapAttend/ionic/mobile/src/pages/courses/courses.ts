import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AttendPage } from '../attend/attend';
import { AddCoursePage } from '../addCourse/addCourse';


@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursePage {

  searchQuery: string = '';
  items: string[];

  constructor( public navCtrl: NavController,
    public NavParams: NavParams) {
      this.initializeItems();
      
  }
 
  attendClick(){
    this.navCtrl.push(AttendPage);
  }

  addClick(){
    this.navCtrl.push(AddCoursePage);
 }

 initializeItems() {
  this.items = [
   /* 'CSI2110 Data Structures And Algorithms',
    'CEG4136 Computer Architecture',
    'SEG3102 Software Design and Architecture',
    'ELG3125 Signals And Systems Analysis'*/
  ];
}

getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}


}

