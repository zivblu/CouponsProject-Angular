import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-all-purchased-coupons',
  templateUrl: './get-all-purchased-coupons.component.html',
  styleUrls: ['./get-all-purchased-coupons.component.css']
})
export class GetAllPurchasedCouponsComponent implements OnInit {

  public _coupons: Coupon[];
  
  constructor(private _service: CouponService) {}

   ngOnInit() {
     this.getAllPurchasedCoupons();
   }
 
   public getAllPurchasedCoupons() {
     var self = this;
    this._service.getAllPurchasedCoupons()
      .subscribe(
          coupons =>
          {
          for(let c of coupons) {
                console.log(c);
              }
              self._coupons = coupons;
            },
          error =>  console.log(error) 
         );
     }
 
}