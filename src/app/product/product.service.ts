import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductModel[] = [];
  constructor(private http:HttpClient) { }

  get allProduct():Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>('http://localhost:4200/assets/json/products.json');
  }
  
}
