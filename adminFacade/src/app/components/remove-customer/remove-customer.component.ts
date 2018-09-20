import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../common/Customer';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  public _customers : Customer[];

  public customer : Customer= new Customer(); 
  
  public id : number;

  public customerFormat : HTMLFormElement; 
  
  constructor(private _service : CustomerService) {}

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

public removeCustomer() {
  var self = this;
  swal({
    title: 'Are you sure?',
    text: "You Won't Be Able To Revert Customer " + this.customer.custName + ' Removal' +'?',
    type: 'warning',
    showCancelButton: true,
    animation: false,
    customClass: 'animated flipInX ',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Remove!'
  }).then((result) => {
    if (result.value) {
      this._service.removeCustomer(this.id)
      .subscribe(
                   response =>
                    {
                      console.log(response);
                      swal({
                       type: 'success',
                       title: 'Removed!',
                       showConfirmButton: false,
                       animation: false,
                       customClass: 'animated rubberBand',
                       text:'Customer ' + self.customer.custName + ' Has Been Removed.',
                       timer: 1800});
                       self.reset();
                    },
                   error =>
                      {
                        console.log(error);  
                        swal({
                          imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/deja_q_hd_046_resized_6484.jpg',
                          imageWidth: 400,
                          imageHeight: 200,
                          imageAlt: 'Custom image',
                          title: 'OHHHH NOOOO',
                          animation: false,
                          customClass: 'animated shake',
                          text: 'Customer ' + self.customer.custName + ' Cant Be Removed.'});
                        self.reset();
                    }  
                    );
    }
    else if (result.dismiss === swal.DismissReason.cancel) {
      swal(
        'Cancelled',
        'The Customer ' + self.customer.custName + ' Was Not Removed.',
        'error'
      );
      self.reset(); 
    }
  })
} 

  public reset () {
    this.getAllCustomers();
    this.customerFormat.reset();
    }

}
