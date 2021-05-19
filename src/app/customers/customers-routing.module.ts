import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'customers', pathMatch: 'full'
  },
  {
   path: 'customers', component: CustomersListComponent,
  },
  {
    path: 'customers/create', component: CustomerDetailComponent,
  },
  {
    path: 'customers/:uid', component: CustomerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
