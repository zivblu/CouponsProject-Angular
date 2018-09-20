import { Injectable } from '@angular/core';
import { Coupon } from '../components/common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CouponService {

public urlAll = ('http://localhost:8080/customerws/getallcoupons/');
public url = ('http://localhost:8080/customerws/getpurchasedcoupons/');; 
public urlType = ('http://localhost:8080/customerws/coupon/type/'); 
public urlPrice = ('http://localhost:8080/customerws/coupon/price/');

   constructor(private _http : Http) {}
 
    public getAllCoupons()  
    {
    return this._http.get(this.urlAll)
    .map(response=> response.json());
    }

    public getCoupon (id: number) 
    {
    return this._http.get(this.urlAll +'/'+id)
    .map(response=> response.json());
    }

    public purchaseCoupon (id: number, coupon: Coupon) 
    {
    return this._http.put(this.urlAll +'/'+id, coupon); 
    }

    public getAllPurchasedCoupons()  
    {
    return this._http.get(this.url)
    .map(response=> response.json());
    }
  
   public getAllPurchasedCouponsByPrice(price: number)  
   {
    return this._http.get(this.urlPrice +'/'+price)
    .map(response=> response.json());
   }
   
   public getAllPurchasedCouponsByType(type: string)  
   {
    return this._http.get(this.urlType +'/'+type)
    .map(response=> response.json());
   }
 
}