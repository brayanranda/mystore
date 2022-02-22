import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor() { }
  
  // Viene desde el padre - Tambn debemos darle un estado inicial
  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
  }

  // Transmitir al padre el Producto que se esta agregando
  // Con esto enviamos un objeto completo 
  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    // Emitir el producto
    this.addedProduct.emit(this.product);
  }

}
