import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
/*import { TasksComponent } from './user/tasks/tasks.component';*/
import{ ListTaskComponent } from './user/list-task/list-task.component';
import { RegisterComponent} from './auth/register/register.component';
import { CreateTaskComponent } from './user/create-task/create-task.component';
import { LoginComponent } from './auth/login/login.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth/guards/auth.guard';

const routes : Routes=[
  {path:'', component:HomeComponent},
 /* {path:'tasks', component:TasksComponent, canActivate:[AuthGuard]},*/
  {path:'list-tasks', component:ListTaskComponent, canActivate:[AuthGuard]},
  {path:'create-task', component:CreateTaskComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
