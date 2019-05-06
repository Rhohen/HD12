import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { SuperadminComponent } from './superadmin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';

const superadminroutes: Routes = [
  {path: 'superadmin-panel-control', component: SuperadminComponent,
    children: [
      {path: 'list-admin' , component: ListAdminComponent},
      {path: '',  component: SuperadminComponent},
    ]
}

]

@NgModule({
  imports: [ RouterModule.forChild(superadminroutes)],
  exports:[RouterModule],
  providers:[],
  declarations: [],
  entryComponents: []
})
export class AdminRoutingModule { }
