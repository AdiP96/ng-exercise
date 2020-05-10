import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // our main users list
  users: Observable<User[]>;
  // current page number
  pageNumber: number;
  // the total number of pages
  totalPages: number;
  // a boolean value to check if we are currently on the first page
  firstpage: boolean;
  // a boolean value to check if we are currently on the last page
  lastpage: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.pageNumber = 1;
    this.loadData();
  }
  // this will take us to the user detail page for the provided userid
  goToUserDetails(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
  // this function is used to load the state data
  loadData() {
    this.userService.getUsersList(this.pageNumber).subscribe(result => {
      this.totalPages = result.total_pages;
      this.users = result.data;
      if (this.pageNumber === 1) {
        this.firstpage = true;
      } else {
        this.firstpage = false;
      }
      if (this.totalPages === this.pageNumber) {
        this.lastpage = true;
      } else {
        this.lastpage = false;
      }
    });
  }

  // this function is called to change the user list to the previous page
  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadData();
    }
  }
  // this function is called to change the user list to the next page
  nextPage() {
    if (this.totalPages > this.pageNumber) {
      this.pageNumber++;
      this.loadData();
    }
  }
}
