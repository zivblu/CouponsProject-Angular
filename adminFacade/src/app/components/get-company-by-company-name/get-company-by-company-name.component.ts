import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import { Company } from '../common/Company';

@Component({
  selector: 'app-get-company-by-company-name',
  templateUrl: './get-company-by-company-name.component.html',
  styleUrls: ['./get-company-by-company-name.component.css']
})
export class GetCompanyByCompanyNameComponent implements OnInit {
  
  public  _companies: Company[];  

  public company:  Company = new Company(); 

  public companyName: string;

  public id: number;

  public companyFormat : HTMLFormElement;
  
  constructor(private _service: CompanyService ) {}

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

public getCompanyByCompName() 
{
    var self = this;
    this._service.getCompanyByCompName(this.companyName)
       .subscribe(
          companies => 
           {
             for(let c of companies)
             {
             console.log(c);
             }
             self.company=companies;
           }, 
            error =>  console.log(error) 
          );
  }
 
}
