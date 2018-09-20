import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-all-purchased-coupons-by-price',
  templateUrl: './get-all-purchased-coupons-by-price.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-price.component.css']
})
export class GetAllPurchasedCouponsByPriceComponent implements OnInit {

  public  _coupons : Coupon[];

  public  _selectedCoupons : Coupon[];
  
  public price: number;
   
  constructor( private _service : CouponService) {}

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
    public getAllPurchasedCouponsByPrice() {
      var self = this;
      this._service.getAllPurchasedCouponsByPrice(this.price)
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
