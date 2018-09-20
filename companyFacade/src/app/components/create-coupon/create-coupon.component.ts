import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public Resturans : string =  "/assets/resturants.jpg";
  public Electricity : string = "/assets/electricity.jpg";
  public Food : string = "/assets/food.jpg";
  public Health : string = "/assets/health.jpg";
  public Sports : string = "/assets/sports.jpg";
  public Camping : string = "/assets/camping.jpg";
  public Travelling : string = "/assets/travelling.jpg";

  public images : string [] = [];

  public coupon :  Coupon= new Coupon();
  
  public couponFormat: HTMLFormElement;
     
  constructor(private _service: CouponService) {}
 
  ngOnInit() 
  {
  this.couponFormat = <HTMLFormElement>document.getElementById("couponFormat");
  }
   
  public createCoupon () 
  {
    var self = this;
    this._service.createCoupon(this.coupon)
    .subscribe(
      response =>
                {
                 console.log(response);
                  swal({
                  type: 'success',
                  title:'Coupon Created',
                  showConfirmButton: false,
                  animation: false,
                  customClass: 'animated bounceInDown',
                  text:'Coupon ' + self.coupon.title + '  Was Created.',
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
                  text: 'Coupon ' + self.coupon.title + ' Cant Be Created.'});
                  self.reset();
                }  
                );
   }
 public reset () 
  {
     this.couponFormat.reset();
  } 

}