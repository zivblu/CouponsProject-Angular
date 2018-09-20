import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import { Customer } from '../common/Customer';
import { Http } from '@angular/http';

@Component({
  selector: 'app-get-customer-by-customer-name',
  templateUrl: './get-customer-by-customer-name.component.html',
  styleUrls: ['./get-customer-by-customer-name.component.css']
})
export class GetCustomerByCustomerNameComponent implements OnInit {

  public _customers : Customer[];  
  
  public customer :  Customer = new Customer(); 
  
  public id : number;

  public custName : string;

  public customerFormat : HTMLFormElement; 
  
  constructor(private _http : Http, private _service : CustomerService) {}

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

  public getCustomerByCustName() 
  {
      var self = this;
      this._service.getCustomerByCustName(this.custName)
          .subscribe(
            customers => 
            {
              for(let c of customers)
              {
              console.log(c);
              }
              self.customer=customers;
            }, 
        error =>  console.log(error) 
      );
  }

  }
  