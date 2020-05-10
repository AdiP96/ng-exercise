import { Component } from '@angular/core';

@Component({
  selector: 'ng-e-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn = false;
  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  signup() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
