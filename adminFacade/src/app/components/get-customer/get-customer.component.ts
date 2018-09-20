import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import { Customer } from '../common/Customer';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  public _customers : Customer[];  
  
  public customer :  Customer = new Customer(); 
  
  public id : number;

  public customerFormat : HTMLFormElement; 
  
  constructor(private _service : CustomerService) {}

  ngOnInit() 
  {
    this.getAllCustomers();
    this.customerFormat = <HTMLFormElement>document.getElementById("customerFormat");
  }

  public getAllCustomers() 
  {
    var self = this;
   this._service.getAllCustomers()
     .subscribe(
         customers =>
        {
          for(let c of customers) 
          {
          console.log(c);
          }
             self._customers = customers;
        },
         error =>  console.log(error) 
        );
  }

  public getCustomer() 
  {
      var self = this;
      this._service.getCustomer(this.id)
          .subscribe(
            customer => 
            {
              console.log(customer);
              self.customer=customer;
            }, 
        error =>  console.log(error) 
      );
  }

}
