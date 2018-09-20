import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public _coupons: Coupon[];

  public id: number;

  public coupon :  Coupon= new Coupon();
  
  public couponFormat: HTMLFormElement;

    
    constructor( private _service: CouponService ) {}

    ngOnInit()
    {
      this.getAllCoupons();
      this.couponFormat = <HTMLFormElement>document.getElementById("couponFormat");
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
         error => console.log(error)  
        );
    }

    public getCoupon() {
      var self = this;
      this._service.getCoupon(this.id)
         .subscribe(
             coupon => {
               console.log(coupon);
               self.coupon=coupon;
             }, 
              error =>  console.log(error) 
            );
        }
       

     
  public purchaseCoupon () {
   var self = this;
  this._service.purchaseCoupon(this.id, this.coupon)
  .subscribe(
               response =>
                {
                 console.log(response);
                swal({
                  type: 'success',
                  title:'Coupon Purchased',
                  showConfirmButton: false,
                  animation: false,
                  customClass: 'animated bounceInDown',
                  text:'Coupon ' + self.coupon.title + ' Was Purchased.',
                  timer: 2400});
                  self.reset();
                },
               error =>
                  {
                  console.log(error);  
                swal({
                  type: 'error',
                  title: 'OHHHH NOOOO!',
                  animation: false,
                  customClass: 'animated shake',
                  text: 'Coupon ' + self.coupon.title + ' Cant Be Purchased.'});
                  self.reset();
                }  
                );
   }
  
   public reset () {
     this.getAllCoupons();
     this.couponFormat.reset();
  }

}