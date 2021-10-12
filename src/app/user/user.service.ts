import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:UserModel[] = [
    new UserModel("apsara","s","apsara@gmail.com","India","Hi Hello",true)
  ];
  constructor() { }
  get alluser(){
    return this.users;
  }
  get length():number{
    return this.users.length;
  }
  GetUserById(id:number){
    return this.users[id-1];
  }
  AddUser(user:UserModel){
    this.users.push(user);
  }
  UpdateUser(id:number,user:UserModel){
    this.users[id-1] = user;
  }
  DeleteUser(id:number){
    this.users.splice(id-1,1);
  }
}
