import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users:UserModel[] = [];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.users = this.userservice.alluser;
  }

}
