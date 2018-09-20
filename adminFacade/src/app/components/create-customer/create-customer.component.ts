import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import { Customer } from '../common/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  public customer : Customer = new Customer();

  public customerFormat : HTMLFormElement;

  constructor(private _service : CustomerService) { }

  ngOnInit() 
  {
  this.customerFormat = <HTMLFormElement>document.getElementById("customerFormat");
  }

  public createCustomer()
  {
    var self = this;
    this._service.createCustomer(this.customer)
    .subscribe(
      response =>
      {
        console.log(response);
        swal({
        type: 'success',
        title:'Customer Created',
        showConfirmButton: false,
        animation: false,
        customClass: 'animated bounceInDown ',
        text:'Customer ' + self.customer.custName + ' Was Created.',
        timer: 2000});
        self.reset();
      },
       error =>
       {
        console.log(error);  
        swal({
         type: 'error',
         title: 'OHHHH NOOOO!',
         animation: false,
         customClass: 'animated shake',
         text: 'Customer ' + self.customer.custName + ' Cant Be Created.'});
         self.reset();
       }  
     );
   }
   public reset () 
   {
     this.customerFormat.reset();
   }
  
  }

