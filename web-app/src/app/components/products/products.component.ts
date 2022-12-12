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
  private pageSize:number = 10;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page:number=0){
    this.productService.allProducts(this.pageSize,page)
      .subscribe({
        next:data => {
          this.products = data._embedded.products;
        },
        error:err => {
          this.errorMessage = err.message()
        }
      })
  }

}
