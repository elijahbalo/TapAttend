import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  islocked: boolean = true;

  constructor(public navCtrl: NavController) {
   
  }

  editClick(){
    if(this.islocked==true){
    this.islocked=false;
    }
    else {
      this.islocked=true;
    }
  }

}
