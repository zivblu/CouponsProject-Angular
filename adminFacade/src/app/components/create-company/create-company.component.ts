import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import { Company } from '../common/Company';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public company : Company = new Company();

  public companyFormat : HTMLFormElement;

  constructor(private _service : CompanyService) { }

  ngOnInit() 
  {
  this.companyFormat = <HTMLFormElement>document.getElementById("companyFormat");
  }

  public createCompany()
  {
    var self = this;
    this._service.createCompany(this.company)
    .subscribe(
      response =>
      {
        console.log(response);
        swal({
        type: 'success',
        title:'Company Created',
        showConfirmButton: false,
        animation: false,
        customClass: 'animated bounceInDown',
        text:'Company ' + self.company.companyName + ' Was Created.',
        timer: 2400});
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
         text: 'Company ' + self.company.companyName + ' Cant Be Created.'});
         self.reset();
       }  
     );
   }
   public reset () 
   {
     this.companyFormat.reset();
   }
  
  }