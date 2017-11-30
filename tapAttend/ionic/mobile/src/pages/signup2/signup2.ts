import { ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CoursePage } from '../courses/courses';
//import { AttendPage } from '../attend/attend';
import { TabsPage } from '../tabs/tabs';
import { SignPage } from '../sign/sign';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})

export class SignUpPage2 {
    //splash = true;
  username;
  password;
  firstname;
  lastname;
  studentId;
  email;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService,
              public viewCtrl: ViewController,
              public loadctrl: LoadingController,
              public toastCtrl: ToastController) {
   // this.tabBarElement = document.querySelector('.tabbar');
   if (navParams.get('username')) {
      this.username = navParams.get('username');
    }
     if (navParams.get('password')) {
      this.password = navParams.get('password');
    }
    if (navParams.get('firstname')) {
      this.firstname = navParams.get('firstname');
    }
     if (navParams.get('lastname')) {
      this.lastname = navParams.get('lastname');
    }if (navParams.get('studentId')) {
      this.studentId = navParams.get('studentId');
    }
     if (navParams.get('email')) {
      this.email = navParams.get('email');
    }
    console.log(this.username,this.password,this.firstname,this.lastname,this.studentId,this.email)
    }

    signUp(){let loading = this.loadctrl.create({
      spinner: 'dots',
      content: 'Loading Please Wait...'
    });
    loading.present();
    this.userService.signUp(this.username,
                           this.password, 
                           this.firstname, 
                           this.lastname, 
                           this.studentId, 
                           this.email).subscribe(res => {
      loading.dismiss();
      this.viewCtrl.dismiss();
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      })
      toast.present();
      this.navCtrl.push(SignPage);
    },
      err => {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: err.statusText,
          duration: 3000,
          position: 'top'
        })
        toast.present();
      });
     
  }
  
  
 // ionViewDidLoad() {
   // setTimeout(() => this.splash = false, 4000);
  //}
  
 
}