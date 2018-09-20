import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import { Company } from '../common/Company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public  _companies: Company[];  

  public id: number;

  public company :  Company= new Company();
  
  public companyFormat: HTMLFormElement;

  constructor( private _service :CompanyService) { 

}
  ngOnInit() {
    this.getAllCompanies();
    this.companyFormat = <HTMLFormElement>document.getElementById("companyFormat");
  }

  public getAllCompanies() {
    var self = this;
   this._service.getAllCompanies()
     .subscribe(
         companies =>
         {
         for(let c of companies) {
               console.log(c);
             }
             self._companies = companies;
           },
         error =>  console.log(error) 
        );
    }

public getCompany() {
    var self = this;
    this._service.getCompany(this.id)
       .subscribe(
           company => {
             console.log(company);
             self.company=company;
           }, 
            error =>  console.log(error) 
          );
      }
      
  public updateCompany ()
  {
    var self = this;
    this._service.updateCompany(this.id, this.company)
    .subscribe(
      response => 
      {
        console.log(response);
        swal({
        position: 'center',
        type: 'success',
        title:'Success!',
        showConfirmButton: false,
        animation: false,
        customClass: 'animated rubberBand',
        text:'Company ' + self.company.companyName + ' Has Been Updated.',
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
          title: 'OHHHH NOOOO!',
          animation: false,
          customClass: 'animated shake',
          text: 'Company ' + self.company.companyName + ' Cant Be Updated.'});
        self.reset();    
       }
      );   
    }
  public reset () {
    this.companyFormat.reset();
  }

}