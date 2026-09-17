import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { Producto } from '../../interfaces/IProducto';

const { required, minLength, min, max, maxLength } = Validators

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  formulario

  productoCreado = output<Producto>()

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ["", [required, minLength(4)]],
      descripcion: [""],
      precio: [0],
      categoria: [""],
      imagen: [""],
      disponible: [true]
    })
  }

  guardarProducto() {
    const data = this.formulario.getRawValue()
    const { nombre, descripcion, categoria, precio, imagen, disponible } = data

    const nuevoProducto: Producto = {
      id: crypto.randomUUID(),
      nombre: nombre || "producto sin nombre",
      descripcion: descripcion || "producto sin descripción",
      precio: precio || 0,
      categoria: categoria || "general",
      imagen: imagen || 'https://placehold.co/100x100',
      disponible: disponible || true
    }

    this.productoCreado.emit(nuevoProducto)
  }
}
