import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models/customer.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'estadoCivil', 'fechaNacimiento', 'activo', 'actions'];
  currentDate = new Date();
  dataSource = new MatTableDataSource<Customer>([]);

  constructor(
    private customerService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(customers => {
      if (customers && customers.length > 0) {
        this.dataSource = new MatTableDataSource<Customer>(customers);
      } else {
        this.dataSource = new MatTableDataSource<Customer>([]);
      }
    });
  }

  deleteCustomer(uid: string) {
    this.customerService.deleteCustomer(uid);
  }

}
