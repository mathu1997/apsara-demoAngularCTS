import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"users",component:UserComponent,children:[
    {path:"view/:id",component:UserViewComponent},
    {path:"add",component:RegisterComponent},
    {path:"edit/:id",component:RegisterComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
