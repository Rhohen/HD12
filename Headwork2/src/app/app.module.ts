import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { DeleteUserDialog } from './admin/list-user/list-user.component';
import { DeleteTaskDialog } from './admin/list-tasks/list-tasks.component';
import { UpdateUserDialog } from './superadmin/list-admin/list-admin.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import {AuthService} from './auth/services/auth.service';
import { HomeComponent } from './public/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule,MatCheckboxModule,
  MatSidenavModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatDialogModule, MatInputModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './public/navbar/navbar.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './public/footer/footer.component';
import { from } from 'rxjs';
import { ListTaskComponent } from './user/list-task/list-task.component';
import { CreateTaskComponent } from './user/create-task/create-task.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ListAdminComponent } from './superadmin/list-admin/list-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TasksComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ListTaskComponent,
    CreateTaskComponent,
    SuperadminComponent,
    DeleteUserDialog,
    DeleteTaskDialog,
    ListAdminComponent,
    UpdateUserDialog,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    AppRoutingModule, AdminModule, MatCheckboxModule,
    MatGridListModule, MatCardModule,
    MatMenuModule,MatIconModule,
    MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatListModule,
    MatTableModule,MatPaginatorModule,
    MatSortModule, MatDialogModule, MatInputModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatSnackBarModule, MatTooltipModule,
    LayoutModule, FormsModule, ReactiveFormsModule,
     PdfViewerModule, MatRadioModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteUserDialog, UpdateUserDialog, DeleteTaskDialog]

})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
