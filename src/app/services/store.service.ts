import { Product } from '../models/product/product.model' ;
import { Injectable } from '@angular/core';
// La usamos para el counter del nav
import { BehaviorSubject } from 'rxjs';

// Injectable permite que se pueda inyectar en otros componentes o servicios
// Injectable es un decorador
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Referencia a una lista
  // onAddToShoppingCart agrega productos a este arreglo
  private myShoppingCart: Product[] = [];
  // La usamos para el counter del nav - mandamos una array en vacio []
  private myCart = new BehaviorSubject<Product[]>([]);
  // Se puede suscribir a este observador para mostrar en el carrito del nav por ejemplo
  myCart$ =  this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getMyShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
