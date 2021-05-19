import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'estadoCivil', 'fechaNacimiento', 'activo', 'actions'];
  currentDate = new Date();
  dataSource: Customer[] = [
    {
      codigo: 1,
      nombre: 'Cesar',
      estadoCivil: 'Soltero',
      fechaNacimiento: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()),
      activo: true
    },
    {
      codigo: 1,
      nombre: 'Cesar',
      estadoCivil: 'Soltero',
      fechaNacimiento: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()),
      activo: true
    },
    {
      codigo: 1,
      nombre: 'Cesar',
      estadoCivil: 'Soltero',
      fechaNacimiento: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()),
      activo: true
    },
    {
      codigo: 1,
      nombre: 'Cesar',
      estadoCivil: 'Soltero',
      fechaNacimiento: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()),
      activo: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
