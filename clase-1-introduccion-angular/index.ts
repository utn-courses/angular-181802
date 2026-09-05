// typescript

const sumar = (n1: number, n2: number) => {
  return n1 + n2
}

const resultado = sumar(65, 2)
console.log(resultado)

let nombre: string = "Gabriel"

nombre = "José"

// firmo que todos los productos resepetarán la estructura de la interface de Producto
interface Producto {
  id: number
  nombre: string
  precio: number
}

const producto1: Producto = {
  id: 1,
  nombre: "Computadora Lenovo VG5",
  precio: 2000000
}

const producto2: Producto = {
  id: 1,
  nombre: "Computadora Lenovo VG5",
  precio: 50000
}

const productos = [producto1, producto2]

productos.forEach((producto, indice) => console.log(`El precio del producto ${indice + 1} es: $${producto.precio}`))

