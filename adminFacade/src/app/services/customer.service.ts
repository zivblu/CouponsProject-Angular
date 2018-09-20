import { Injectable } from '@angular/core';
import { Customer } from '../components/common/Customer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable()
export class CustomerService {

public url = ('http://localhost:8080/adminws/customer/');  

public cust : Customer = new Customer();

public custDouble : Customer;

  constructor(private _http : Http) 
  {

  }
  
  public getAllCustomers()  
  {
   return this._http.get(this.url)
      .map(response=> response.json());
  }
  
  public getCustomer (id: number) 
  {
     return this._http.get(this.url +'/'+id)
     .map(response=> response.json());
  }

  public getCustomerByCustName (custName: string) 
  {
    return this._http.get(this.url +'/name/'+custName)
    .map(response=> response.json());
  }
  
  public createCustomer (customer: Customer) 
  {
    return this._http.post(this.url, customer)
  }
  
  public updateCustomer (id: number, customer: Customer) 
  {
    return this._http.put(this.url +'/'+id, customer);
  }
  
  public removeCustomer (id: number) 
  {
    return this._http.delete(this.url +'/'+id);
  }  
  
}