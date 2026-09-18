import { Injectable, Service } from '@angular/core';
import { Producto } from '../interfaces/IProducto';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private products$ = new BehaviorSubject<Producto[]>([])

  constructor(private http: HttpClient) {
    this.products$.next(this.productos)
  }

  productos: Producto[] = []

  obtenerProduct() {
    const respuesta = this.http.get<Producto[]>("https://fakestoreapi.com/products")
    return respuesta
  }

  agregarProducto(producto: Producto) {
    const respuesta = this.http.post<Producto[]>("https://fakestoreapi.com/products", producto)
    return respuesta
  }

  actualizarProducto(id: number, producto: Producto) {
    const respuesta = this.http.put<Producto[]>(`https://fakestoreapi.com/products/${id}`, producto)
    return respuesta
  }

  borrarProducto(id: number) {
    const respuesta = this.http.delete<Producto[]>(`https://fakestoreapi.com/products/${id}`,)
    return respuesta
  }
}
