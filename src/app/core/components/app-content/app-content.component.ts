import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    first_name: 'Ahsan',
    last_name: 'Ayaz',
    email: '',
    id: null,
    avatar: ''
  };
  constructor(public myapp: AppComponent, private router: Router) { }

  ngOnInit() {
  }
  goToUsersListPage() {
    this.router.navigate([`/users`]);
  }
}
