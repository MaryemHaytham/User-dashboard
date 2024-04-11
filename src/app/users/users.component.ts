import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  @ViewChild(SidebarComponent) sidebar: SidebarComponent | undefined;

}
