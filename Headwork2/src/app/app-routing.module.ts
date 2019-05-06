import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { ListTaskComponent } from './user/list-task/list-task.component';
import { RegisterComponent} from './auth/register/register.component';
import { CreateTaskComponent } from './user/create-task/create-task.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ListAdminComponent } from './superadmin/list-admin/list-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { ListUserComponent, DeleteUserDialog } from './admin/list-user/list-user.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth/guards/auth.guard';
import { SuperadminGuard } from './auth/guards/superadmin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'list-tasks', component: ListTaskComponent},
  {path: 'create-task', component: CreateTaskComponent},
  { path: 'admin', redirectTo: 'admin-panel-control', pathMatch: 'full'},
  { path: 'admin', component: ListUserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'admin', redirectTo: 'superadmin-panel-control', pathMatch: 'full'},
  {path: 'superadmin', component: ListAdminComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  entryComponents: [],
  exports:[RouterModule],
  providers:[AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
