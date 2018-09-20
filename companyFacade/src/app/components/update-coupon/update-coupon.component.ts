import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public _coupons : Coupon[];

  public coupon :  Coupon= new Coupon();

  public id : number;

  public couponFormat : HTMLFormElement;

  constructor(private _service: CouponService) { }

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
         error =>  console.log(error) 
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
       public updateCoupon ()
       {
         var self = this;
         this._service.updateCoupon(this.id, this.coupon)
         .subscribe(
           response => 
           {
             console.log(response);
             swal({
             position: 'center',
             type: 'success',
             title:'Success!',
             showConfirmButton: false,
             animation: false,
             customClass: 'animated rubberBand',
             text:'Coupon ' + self.coupon.title + ' Has Been Updated.',
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
               title: 'OHHHH NOOOO!',
               animation: false,
               customClass: 'animated shake',
               text: 'Coupon ' + self.coupon.title + ' Cant Be Updated.'});
             self.reset();    
            }
           );   
         }
      public reset () {
        this.couponFormat.reset();
       }
     
}
