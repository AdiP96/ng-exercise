import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../core/components/users-list/users-list.component';
import { UserDetailComponent } from '../core/components/user-detail/user-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { routes } from './users.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UsersListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UsersModule { }
