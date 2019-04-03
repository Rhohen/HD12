import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import {AuthService} from './auth/services/auth.service';
import { HomeComponent } from './public/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule }    from '@angular/forms';
import {MatGridListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule,MatCheckboxModule,
  MatSidenavModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatDialogModule, MatInputModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
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
    CreateTaskComponent
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
    LayoutModule, FormsModule, ReactiveFormsModule,
     PdfViewerModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
