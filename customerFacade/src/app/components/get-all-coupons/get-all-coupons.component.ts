import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public Resturans : string =  "/assets/resturants.jpg";
  public Electricity : string = "/assets/electricity.jpg";
  public Food : string = "/assets/food.jpg";
  public Health : string = "/assets/health.jpg";
  public Sports : string = "/assets/sports.jpg";
  public Camping : string = "/assets/camping.jpg";
  public Travelling : string = "/assets/travelling.jpg";

  public images : string [] = [];

  public  _coupons : Coupon[];

  constructor(private _service: CouponService) {}

  ngOnInit() 
  {
    this.getAllCoupons();
  }

  public getAllCoupons() {
    var self = this;
   this._service.getAllCoupons()
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