import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl:'./users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  length = 20;
  pageSize = 5;
  pageIndex =0;
  pageNumber=1;
  pageSizeOptions = [5];
  pageEvent :PageEvent|any;
  tableUsersData:any[]=[];
  tableData: any;
  avatar: string= 'https://reqres.in/img/faces/';
  dummyImage:string='../../../../assets/images/avatar.png'
  totalCount:any;

  constructor(private _UsersService:UsersService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.getallUsers()
  }
  getallUsers(){
  let params = {
    per_page: this.pageSize,
    page: this.pageNumber,
  }
  this._UsersService.getAllUsers(params).subscribe({
    next:(res)=>{
      console.log(res);
      this.tableUsersData=res;
      this.tableData=res.data;
      this.totalCount = res.total;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

openViewUserDialog(userId:any){
  const dialogRef = this.dialog.open(UserDetailsComponent, {
    data:userId
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result)   
  });
}
viewUser(userId:any){
  this._UsersService.onViewUser(userId).subscribe({
   next:(res)=>{
    console.log(res)
   },
   error:(err)=>{
    console.log(err)
   }
  })
}
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
 this.getallUsers()
}

}
