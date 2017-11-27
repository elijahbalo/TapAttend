import { Component } from '@angular/core';
import { RefresherService } from './../../services/refresher.service';
import { UserService } from './../../services/users.service';
import { NavController, NavParams, LoadingController, ModalController, AlertController, ToastController } from 'ionic-angular';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  currentUser;
  loader;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,
              public userService: UserService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private refresherService: RefresherService) {

                if (!localStorage.getItem('userData')) {
        this.userService.getCurrentUserInfo().subscribe(response => {
          localStorage.setItem('userData', JSON.stringify(response));
          this.currentUser = JSON.parse(localStorage.getItem('userData'));
        });
      } else {
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
   
  }
 
        
}
}