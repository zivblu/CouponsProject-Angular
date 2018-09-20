import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { GetAllPurchasedCouponsComponent } from './components/get-all-purchased-coupons/get-all-purchased-coupons.component';
import { GetAllPurchasedCouponsByTypeComponent } from './components/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';
import { GetAllPurchasedCouponsByPriceComponent } from './components/get-all-purchased-coupons-by-price/get-all-purchased-coupons-by-price.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';

import { HeaderComponent } from './components/header/header.component';

import {CouponService} from './services/coupon.service';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseCouponComponent,
    GetAllPurchasedCouponsComponent,
    GetAllPurchasedCouponsByTypeComponent,
    GetAllPurchasedCouponsByPriceComponent,
    GetAllCouponsComponent,   
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot([
      {
        path: 'getallcoupons',
        component: GetAllCouponsComponent
      },
      {
        path: 'purchasecoupon',
        component: PurchaseCouponComponent
      },
      {
        path: 'getallpurchasedcoupons',
        component: GetAllPurchasedCouponsComponent
      },
      {
        path: 'getallpurchasedcouponsbytype',
        component: GetAllPurchasedCouponsByTypeComponent
      },
      {
        path: 'getallpurchasedcouponsbyprice',
        component: GetAllPurchasedCouponsByPriceComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
    ])   
  ],
  providers: [CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
