import { Component, OnInit } from '@angular/core';
import {Product} from "../../modules/product";
import {Customer} from "../../modules/customer";
import {CustomerService} from "../../services/customer.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public errorMessage!:string
  public customers!:Customer[]
  private pageSize:number = 10;

  constructor(private customerService:CustomerService,
              private route:Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page:number=0){
    this.customerService.getCustomers(this.pageSize,page)
      .subscribe({
        next:data => {
          this.customers = data._embedded.customers;
        },
        error:err => {
          this.errorMessage = err.message()
        }
      })
  }

  onOrders(id: number) {
    this.route.navigateByUrl("/orders/"+id)
  }
}
