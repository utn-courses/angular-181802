import { Component } from '@angular/core';
import { Producto } from '../../interfaces/IProducto';
import { ProductCart } from '../../components/product-cart/product-cart';
import { ProductForm } from '../../components/product-form/product-form';
import { ProductService } from '../../service/products';

@Component({
  imports: [ProductCart, ProductForm],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  nombre: string = "Gestión de productos"

  productos: Producto[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.obtenerProduct().subscribe(data => {
      console.log(data)
      this.productos = data
    })
  }

  agregarProducto(producto: Producto) {
    this.productService.agregarProducto(producto)
  }
}
