import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/IProducto';

@Component({
  imports: [],
  selector: 'app-product-cart',
  styleUrl: './product-cart.css',
  templateUrl: './product-cart.html',
})
export class ProductCart {
  @Input() producto!: Producto
}
