import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.model' ;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Referencia a una lista
  // onAddToShoppingCart agrega productos a este arreglo
  myShoppingCart: Product[] = [];
  total = 0;
  
  products: Product[] = [
    {
      id: '1',
      name: 'MacBook Pro - Apple',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 5300000,
    },
    {
      id: '2',
      name: 'iPad - Apple',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 4200000,
    },
    {
      id: '3',
      name: 'Dinner',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 200000,
    },
    {
      id: '4',
      name: 'Burger',
      image: 'https://images.unsplash.com/photo-1645115271643-4a712c785cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 100000,
    }    
  ]

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    // 0 Es el estado inicial
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    console.log(product)
  }
}
