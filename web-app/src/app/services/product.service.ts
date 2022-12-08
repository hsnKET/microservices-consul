import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../modules/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  allProducts():Observable<Array<Product>>{
    return this.http
      .get<Array<Product>>(environment.baseInventoryServiceURL+"/products?projection=fullProduct");
  }
}
