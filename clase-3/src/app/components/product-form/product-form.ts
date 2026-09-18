import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../interfaces/IProducto';

const { required, minLength, min } = Validators;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  formulario;

  productoCreado = output<Producto>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      title: ['', [required, minLength(3)]],
      price: [0, [required, min(0)]],
      description: [''],
      category: ['', [required]],
      image: ['']
    });
  }

  guardarProducto() {
    const data = this.formulario.getRawValue();

    const nuevoProducto: Producto = {
      id: Date.now(),
      title: data.title || 'Producto sin nombre',
      price: data.price || 0,
      description: data.description || 'Producto sin descripción',
      category: data.category || 'general',
      image: data.image || 'https://placehold.co/100x100',
      rating: {
        rate: 0,
        count: 0
      }
    };

    this.productoCreado.emit(nuevoProducto);
  }
}