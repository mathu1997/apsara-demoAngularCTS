import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user!: UserModel;
  userId!:number
  constructor(private userservice: UserService, 
            private route:Router,
            private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        if(!params['id'] || this.userservice.length<params['id'])
          this.route.navigate(['/users']);
        this.userId = params['id'];
        this.user = this.userservice.GetUserById(params["id"]);
        console.log(this.user.userInfo);
      }
    );
  }

}
