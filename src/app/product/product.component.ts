import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() UserId!:number;
  products:ProductModel[] = []
  product!:ProductModel;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.allProduct.subscribe(
      (products)=>{
        this.products = products.filter(x=>x.User_Id==this.UserId);
        this.product = this.products[0];
      }
    );
  }

  OnView(product:ProductModel){
    this.product = product;
  }

}
