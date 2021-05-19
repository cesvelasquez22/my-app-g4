import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './components/customers-list/customers-list.component';


// Material
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,

    // Material
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
