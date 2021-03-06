import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { SuperadminGuard } from '../auth/guards/superadmin.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const adminroutes: Routes = [
  {path: 'admin-panel-control', component: SuperAdminComponent,
    children: [
      {path: 'list-user' , component: ListUserComponent},
      {path: '',  component: HomeAdminComponent},
      {path: 'list-user/details/:id',  component: UserDetailComponent},
      {path: 'list-user/update/:id',  component: UpdateUserComponent},
      {path: 'list-tasks',  component: ListTasksComponent}
    ]
}

]

@NgModule({
  imports: [ RouterModule.forChild(adminroutes)],
  exports:[RouterModule],
  providers:[SuperadminGuard],
  declarations: [],
  entryComponents: []
})
export class AdminRoutingModule { }
