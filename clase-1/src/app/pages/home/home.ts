import { Component } from '@angular/core';

interface Product {
  id: number
  nombre: string
  precio: number
}

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  nombre: string = "Gestión de productos"
  cantidad: number = 1
  precioPorProducto = 1000
  contador = 0

  productos: Product[] = [
    {
      id: 1,
      nombre: "Computadora",
      precio: 1000
    },
    {
      id: 2,
      nombre: "Celular",
      precio: 200
    },
    {
      id: 3,
      nombre: "Mesa",
      precio: 600
    }
  ]

  image = "https://picsum.photos/400/250"

  saludar() {
    alert("Hola :)")
  }

  sumar() {
    this.contador++
  }
}
