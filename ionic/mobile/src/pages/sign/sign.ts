import { Component } from '@angular/core';
import { UserService } from './../../services/users.service';
import { RefresherService } from './../../services/refresher.service';
import { ViewController, ModalController, NavController,
         ToastController, LoadingController, AlertController } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from '../signup/signup';


@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html'
})

export class SignPage {
    splash = true;
    //secondPage = SecondPagePage;
  username: string;
  password: string;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private userService: UserService,
              private toastCtrl: ToastController,
              private refresherService: RefresherService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
   // this.tabBarElement = document.querySelector('.tabbar');
    }

    signIn(){  let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.userService.signIn(this.username, this.password).subscribe(response => {
      localStorage.setItem('user-token', response.access_token);
      localStorage.setItem('refresh-token', response.refresh_token);
      this.refresherService.refresh();
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Login Successful',
        duration: 3000,
        position: 'top'
      });
       this.userService.getCurrentUserInfo().subscribe(response => {this.sign();});
      toast.present();
   
    }, err => {
      let message = 'Cannot Login';
      if (err === 'invalid_grant') {
        message = 'Wrong Login Credentials';
      }
      let alert = this.alertCtrl.create({
        title: 'Error !',
        subTitle: message,
        buttons: ['OK']
      });
      loading.dismiss();
      alert.present();
    });
    
  }

    sign(){ 
      this.navCtrl.push(TabsPage);
    }
      
     signUpClick(){
    this.navCtrl.push(SignUpPage);
 }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

 dismiss() {
    this.viewCtrl.dismiss();
  }

}