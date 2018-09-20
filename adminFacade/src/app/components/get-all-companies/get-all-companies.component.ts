import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from '../common/Company';
import {CompanyService} from '../../services/company.service';


@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  public _companies : Company [];

  public company :  Company = new Company;

  public id : number;

  public companyFormat : HTMLFormElement;

  constructor(private _service : CompanyService) {}

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
