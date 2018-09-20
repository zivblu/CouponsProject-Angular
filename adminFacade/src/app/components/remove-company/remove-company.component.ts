import swal,{ SweetAlertOptions } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service'
import { Company } from '../common/Company';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  public  _companies : Company[];  

  public company :  Company = new Company();

  public id : number;

  public companyFormat : HTMLFormElement;

  constructor(private _service : CompanyService) {}

  ngOnInit() 
  {
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

      public removeCompany() {
      var self = this;
      swal({
        title: 'Are You Sure?',
        text: "You Won't Be Able To Revert Company " + this.company.companyName + ' Removal' +'?',
        type: 'warning',
        showCancelButton: true,
        animation: false,
        customClass: 'animated flipInX ',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Remove!'
      }).then((result) => {
        if (result.value) {
          this._service.removeCompany(this.id)
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
                          text:'Company ' + self.company.companyName + ' Has Been Removed.',
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
                            text: 'Company ' + self.company.companyName + ' Cant Be Removed.'});
                          self.reset();
                        }  
                        );
        }
        else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
            'Cancelled',
            'The Company ' + self.company.companyName + ' Was Not Removed.',
            'error'
          );
          self.reset(); 
        }
      })
    } 

  public reset () {
    this.getAllCompanies();
    this.companyFormat.reset();
  }

}