import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetCouponComponent } from './components/get-coupon/get-coupon.component';
import { GetCouponByEndDateComponent } from './components/get-coupon-by-end-date/get-coupon-by-end-date.component';
import { GetCouponByPriceComponent } from './components/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByTypeComponent } from './components/get-coupon-by-type/get-coupon-by-type.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { HeaderComponent } from './components/header/header.component';

import { CouponService } from './services/coupon.service';
import { DatePipe } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    GetCouponComponent,
    GetCouponByEndDateComponent,
    GetCouponByPriceComponent,
    GetCouponByTypeComponent,
    GetAllCouponsComponent,
    HeaderComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot([
      {
        path:'createcoup',
        component: CreateCouponComponent
      },
      {
        path:'removecoup',
        component: RemoveCouponComponent
      },
      {
        path:'updatecoup',
        component: UpdateCouponComponent
      },
      {
        path:'getcoup',
        component: GetCouponComponent
      },
      {
        path:'getcoupbyenddate',
        component: GetCouponByEndDateComponent
      },
      {
        path:'getcoupbyprice',
        component: GetCouponByPriceComponent
      },
      {
        path:'getcoupbytype',
        component: GetCouponByTypeComponent
      },
      {
        path:'getallcoup',
        component: GetAllCouponsComponent
      },
      {
        path:'header',
        component: HeaderComponent
      },
    ])
  ],
  providers: [CouponService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
