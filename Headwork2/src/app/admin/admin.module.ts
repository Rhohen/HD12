import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {MatGridListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule,MatCheckboxModule,
  MatSidenavModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatDialogModule, MatInputModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule, MatCheckboxModule,
  MatSidenavModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatDialogModule, MatInputModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule

  ],
  declarations: [
    SuperAdminComponent,
    ListUserComponent,
    HomeAdminComponent,
    UserDetailComponent,
    UpdateUserComponent,
    ListTasksComponent
  ]
})
export class AdminModule { }
