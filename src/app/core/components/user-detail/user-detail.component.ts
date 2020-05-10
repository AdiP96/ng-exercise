import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: number;
  private sub: any;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.loadUserDetails(this.id);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // this calls the service function to get the user details
  loadUserDetails(id: number) {
    this.userService.getUserDetails(this.id).subscribe(result => {
      this.user = result.data;
    });
  }
  // this function redirects back to the users list page
  goBackToUsersList() {
    this.router.navigate([`/users`]);
  }
}
