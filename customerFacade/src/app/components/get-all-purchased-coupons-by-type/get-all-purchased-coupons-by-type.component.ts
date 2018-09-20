import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-all-purchased-coupons-by-type',
  templateUrl: './get-all-purchased-coupons-by-type.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-type.component.css']
})
export class GetAllPurchasedCouponsByTypeComponent implements OnInit {

  public  _coupons: Coupon[];

  public  _selectedCoupons: Coupon[];
  
  public type: string;
   
  constructor( private _service: CouponService) {}

  ngOnInit() 
  {
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
    public getAllPurchasedCouponsByType() {
      var self = this;
      this._service.getAllPurchasedCouponsByType(this.type)
        .subscribe(
            coupons =>
            {
            for(let c of coupons) {
            console.log(c);
                }
                self._selectedCoupons = coupons;
              },
            error =>  console.log(error) 
           );
       }
 
}