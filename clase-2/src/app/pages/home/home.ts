import { Component } from '@angular/core';
import { Producto } from '../../interfaces/IProducto';
import { ProductCart } from '../../components/product-cart/product-cart';
import { ProductForm } from '../../components/product-form/product-form';

@Component({
  imports: [ProductCart, ProductForm],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  nombre: string = "Gestión de productos"

  productos: Producto[] = [
    {
      id: crypto.randomUUID(),
      nombre: "Computadora",
      precio: 1000,
      categoria: "Electrónica",
      descripcion: "Es una PC ideal para estudiar arquitectura",
      imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Celular",
      precio: 700,
      categoria: "Electrónica",
      descripcion: "Smartphone moderno con excelente cámara",
      imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Auriculares",
      precio: 150,
      categoria: "Audio",
      descripcion: "Auriculares inalámbricos ideales para estudiar y trabajar",
      imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Cámara",
      precio: 1200,
      categoria: "Fotografía",
      descripcion: "Cámara digital para fotografía y creación de contenido",
      imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Notebook",
      precio: 1400,
      categoria: "Electrónica",
      descripcion: "Notebook liviana para trabajar, estudiar y programar",
      imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Teclado mecánico",
      precio: 180,
      categoria: "Periféricos",
      descripcion: "Teclado mecánico ideal para programación y gaming",
      imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      disponible: true
    },
    {
      id: crypto.randomUUID(),
      nombre: "Smartwatch",
      precio: 300,
      categoria: "Tecnología",
      descripcion: "Reloj inteligente para controlar actividad y notificaciones",
      imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      disponible: false
    }
  ]

  agregarProducto(producto: Producto) {
    console.log(producto)
    this.productos.push(producto)
  }
}
