import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private router: Router) {

  }


  btnClick= function () {
        this.router.navigateByUrl('login');
};
}
