import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ListUserComponent, DeleteUserDialog } from './list-user/list-user.component';
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
      {path: 'list-user/update/:id',  component: UpdateUserComponent}
    ]
}

]

@NgModule({
  imports: [ RouterModule.forChild(adminroutes)],
  exports:[RouterModule],
  providers:[SuperadminGuard],
  declarations: [DeleteUserDialog],
  entryComponents: [DeleteUserDialog]
})
export class AdminRoutingModule { }
