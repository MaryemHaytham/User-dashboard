import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class UsersListModule { }
