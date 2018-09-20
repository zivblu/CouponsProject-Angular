import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import { Company } from '../common/Company';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {

  public  _companies: Company[];  

  public company :  Company = new Company(); 

  public id: number;

  public companyFormat : HTMLFormElement;
  
  constructor(private _service: CompanyService) {}
  
    ngOnInit() 
    {
      this.getAllCompanies();
      this.companyFormat = <HTMLFormElement>document.getElementById("companyFormat");
    }
  
    public getAllCompanies() 
    {
      var self = this;
     this._service.getAllCompanies()
       .subscribe(
           companies =>
          {
           for(let c of companies) 
            {
            console.log(c);
            }
               self._companies = companies;
          },
           error =>  console.log(error) 
          );
    }
  
  public getCompany() 
  {
      var self = this;
      this._service.getCompany(this.id)
         .subscribe(
             company => 
             {
               console.log(company);
               self.company=company;
             }, 
              error =>  console.log(error) 
            );
  }
  
  }