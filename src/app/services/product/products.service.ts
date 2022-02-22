import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
    ) { }
    
  getAllProducts() {
    // <Product[]> Esto es para poder mandar this.products = data; en products.component.ts
    // Como es una lista o arreglo debemos colocar []
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}