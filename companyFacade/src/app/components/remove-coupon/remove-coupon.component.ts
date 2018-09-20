import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

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
       public removeCoupon() {
        var self = this;
        swal({
          title: 'Are You Sure?',
          text: "You Won't Be Able To Revert Coupon " + this.coupon.title + ' Removal' +'?',
          type: 'warning',
          showCancelButton: true,
          animation: false,
          customClass: 'animated flipInX ',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Remove!'
        }).then((result) => {
          if (result.value) {
            this._service.removeCoupon(this.id)
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
                            text:'Coupon ' + self.coupon.title + ' Has Been Removed.',
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
                              text: 'Coupon ' + self.coupon.title + ' Cant Be Removed.'});
                            self.reset();
                          }  
                          );
          }
          else if (result.dismiss === swal.DismissReason.cancel) {
            swal(
              'Cancelled',
              'The Coupon ' + self.coupon.title + ' Was Not Removed.',
              'error'
            );
            self.reset(); 
          }
        })
      } 
  
    public reset () {
      this.getAllCoupons();
      this.couponFormat.reset();
    }
  }