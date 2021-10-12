import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products:ProductModel[] = [];
  @Output() viweClick = new EventEmitter<ProductModel>();
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }

  onViewClick(product:ProductModel){
    this.viweClick.emit(product);
  }
}
