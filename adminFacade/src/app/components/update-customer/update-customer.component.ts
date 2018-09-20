import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../common/Customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public _customers :  Customer[];

  public customer :  Customer = new Customer(); 
  
  public id: number;

  public customerFormat: HTMLFormElement; 
  
  constructor( private _service: CustomerService) {

  }

  ngOnInit() 
  {
    this.getAllCustomers();
    this.customerFormat = <HTMLFormElement>document.getElementById("customerFormat");
  }
  public getAllCustomers() {
    var self = this;
   this._service.getAllCustomers()
     .subscribe(
         customers =>
         {
         for(let c of customers) {
               console.log(c);
             }
             self._customers = customers;
           },
         error =>  console.log(error) 
        );
    }

public getCustomer() {
var self = this;
this._service.getCustomer(this.id)
   .subscribe(
       customer => {
         console.log(customer);
         self.customer=customer;
       }, 
        error =>  console.log(error) 
      );
  }
  
  public updateCustomer ()
  {
var self = this;
this._service.updateCustomer(this.id, this.customer)
.subscribe(
  response => {
    console.log(response);
    swal({
    position: 'center',
    type: 'success',
    title:'Success!',
    showConfirmButton: false,
    animation: false,
    customClass: 'animated rubberBand',
    text:'Customer ' + self.customer.custName + ' Has Been Updated.',
    timer: 1800}); 
    self.reset();
  }, 
   error =>  {
    console.log(error);
    swal({
      imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/deja_q_hd_046_resized_6484.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      title: 'OHHHH NOOOO!',
      animation: false,
      customClass: 'animated shake',
      text: 'Customer ' + self.customer.custName + ' Cant Be Updated.'});
    self.reset();    
   }
  );   
  }

public reset () {
this.customerFormat.reset();
}


}