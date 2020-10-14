import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = false;
    this.save();
  }
  save() {
    this.customerService
      .createCustomer(this.customer).subscribe(data => {
        console.log(data)
        this.customer = new Customer();
        this.gotoList();
      },
        error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/customers']);
  }
}
