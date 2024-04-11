import { Component, Inject, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  imagePath: string= 'https://upskilling-egypt.com:3006/';
  dummyImage:string='../../../../assets/images/recipes.jpg'
  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}


