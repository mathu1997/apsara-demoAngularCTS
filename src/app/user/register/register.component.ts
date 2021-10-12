import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string = "User Registeration";
  userId!: number;
  userInfo: string = "";
  userForm!: FormGroup;
  editor!: Editor;
  countryList = ["India", "China", "US"];
  constructor(private userservice: UserService, private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.userForm = new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'country': new FormControl("India", Validators.required),
      'userInfo': new FormControl(null, Validators.required),
      'inIndia': new FormControl(true)
    });
    this.router.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          if (this.userservice.length < params['id'])
            this.route.navigate(['/users']);
          this.userId = params['id'];
          this.title = "Edit User";
        }
        this.userForm.setValue(this.userservice.GetUserById(params["id"]));
      }
    );
  }

  public model: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term == '' ? []
        : this.countryList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  onSubmit() {
    console.log(this.userForm.value);
    if (this.userId) {
      this.userservice.UpdateUser(this.userId, this.userForm.value);
    }
    else {
      let user = new UserModel().ByModel(this.userForm.value);
      user.userInfo = this.userInfo;
      this.userservice.AddUser(user);
    }
  }

}
