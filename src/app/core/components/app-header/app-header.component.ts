import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    first_name: 'Ahsan',
    last_name: 'Ayaz',
    email: '',
    id: null,
    avatar: ''
  };
  isLoggedIn: boolean;
  constructor(public myapp: AppComponent) { }

  ngOnInit() { }

}
