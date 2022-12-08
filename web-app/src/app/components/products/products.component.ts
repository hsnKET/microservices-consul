import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Product} from "../../modules/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public errorMessage!:string
  public products!:Product[]


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.productService.allProducts()
      .subscribe({
        next:data => {
          this.products = data;
        },
        error:err => {
          this.errorMessage = err.message()
        }
      })
  }

}
