import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetCompanyByCompanyNameComponent } from './components/get-company-by-company-name/get-company-by-company-name.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetCustomerByCustomerNameComponent } from './components/get-customer-by-customer-name/get-customer-by-customer-name.component';

import { CompanyService } from './services/company.service'
import { CustomerService } from './services/customer.service'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    RemoveCompanyComponent,
    UpdateCompanyComponent,
    GetCompanyComponent,
    GetCompanyByCompanyNameComponent,
    GetAllCompaniesComponent,
    CreateCustomerComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
    GetCustomerByCustomerNameComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot([
      {
        path:'createcomp',
        component: CreateCompanyComponent
      },
      {
        path:'removecomp',
        component: RemoveCompanyComponent
      },
      {
        path:'updatecomp',
        component: UpdateCompanyComponent
      },
      {
        path:'getcomp',
        component: GetCompanyComponent
      },
      {
        path:'getcompbycompname',
        component: GetCompanyByCompanyNameComponent
      },
      {
        path:'getallcomp',
        component: GetAllCompaniesComponent
      },
      {
        path:'createcust',
        component: CreateCustomerComponent
      },
      {
        path:'removecust',
        component: RemoveCustomerComponent
      },
      {
        path:'updatecust',
        component: UpdateCustomerComponent
      },
      {
        path:'getcust',
        component: GetCustomerComponent
      },
      {
        path:'getallcust',
        component: GetAllCustomersComponent
      },
      {
        path:'getcustbycustname',
        component: GetCustomerByCustomerNameComponent
      },
      {
        path:'header',
        component: HeaderComponent
      }
    ])
  ],
  providers: [CompanyService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

