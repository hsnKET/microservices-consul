import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductResponse} from "../modules/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http:HttpClient) { }

  allOrders(size:number = 10,page:number=0):Observable<ProductResponse>{
    return this.http
      .get<ProductResponse>(environment.baseInventoryServiceURL+"/products?projection=fullProduct&size="+size+"&page="+page);
  }

}
