import { Component, OnInit, Input } from '@angular/core';
import{Customer} from "./customer";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
customers:Customer[]=[]
selectedCustomer:Customer;
@Input() city:string;
  ngOnInit() {
    this.customers=[
      {id:1,firstName:"Semih",lastName:"Sen",age:22},
      {id:2,firstName:"Fatih",lastName:"Sen",age:26}
    ]

  }
selectCustomer(customer:Customer){
this.selectedCustomer=customer
}
}
