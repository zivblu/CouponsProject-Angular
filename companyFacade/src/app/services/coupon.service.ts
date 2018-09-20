import { Injectable} from '@angular/core';
import { Coupon } from '../components/common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable()
export class CouponService  {

    public coup : Coupon = new Coupon();
    public coupon : Coupon;
    public url = ('http://localhost:8080/companyws/coupon/');
    public urlType = ('http://localhost:8080/companyws/coupon/type/'); 
    public urlPrice = ('http://localhost:8080/companyws/coupon/price/');
    public urlEndDate = ('http://localhost:8080/companyws/coupon/date/');  

  constructor(private _http : Http, private _datepipe: DatePipe ) 
  {
    
  }
    public getAllCoupons()  
    {
    return this._http.get(this.url)
    .map(response=> response.json());
    }

     public getAllCouponsByPrice(price: number)  
    {
    return this._http.get(this.urlPrice +'/'+price)
    .map(response=> response.json());
    }
 
    public getAllCouponsByType(type: string)  
    {
    return this._http.get(this.urlType +'/' +type) 
    .map(response=> response.json());
    } 

    public getAllCouponsByEndDate(endDate: Date)  
    {
    var stringdate = this.dateToString(endDate);
    return this._http.get(this.urlEndDate +'/'+stringdate)
    .map(response=> response.json());
    } 
 
    public getCoupon (id: number) 
    {
    return this._http.get(this.url +'/'+id)
    .map(response=> response.json());
    }
    
    public createCoupon (coupon: Coupon) 
    {
    return this._http.post(this.url, coupon)
    }
 
    public updateCoupon (id: number, coupon: Coupon)
    {
    return this._http.put(this.url +'/'+id, coupon);
    }
 
    public removeCoupon (id: number)
    {
    return this._http.delete(this.url +'/'+id);
    }

    public dateToString(date: Date)
    {
    return this._datepipe.transform(date, 'yyyy-MM-dd');
    }
 
}