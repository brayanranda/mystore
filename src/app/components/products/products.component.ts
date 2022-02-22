import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.model' ;
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/product/products.service';

// Esto es un decorador 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  today = new Date();
  // date = new Date(1996, 09, 08);

  constructor(
    private storeService: StoreService,
    // Asincrono, poor lo tanto no se puede tener en las {}, por tal razón debe ir en ngOnInit()
    // Porque no podemos tenerlo de forma instantanea
    private productsService: ProductsService, 
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    // Obtenemos datos con subscribe de la api
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(data)
    })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
    console.log(product)
  }

  // --Forma antigua--
  // onAddToShoppingCart(product: Product) {
  //   this.myShoppingCart.push(product);
  //   // 0 Es el estado inicial
  //   this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  //   console.log(product)
  // }
}
