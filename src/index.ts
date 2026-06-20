import { Producto } from './model/Producto';
import { Resultado } from './model/Resultado';
import { procesarCompra } from './service/Compra';
import { calcularSubtotal, calcularIVA, calcularTotal, IVA } from './service/Calculo';

function mostrarResultado(
  titulo: string,
  productos: Producto[],
  tasaIva?: number
): void {
  const resultado = procesarCompra(productos, tasaIva);
  console.log('\n--- ' + titulo + ' ---');
  console.table(productos);
  console.log('Subtotal: ' + resultado.subtotal);
  console.log('IVA: ' + resultado.iva);
  console.log('Total: ' + resultado.total);
}
 
const compra1: Producto[] = [
  { nombre: 'Frijol', precio: 5, stock: 10 },
  { nombre: 'Arroz', precio: 25, stock: 4 },
  { nombre: 'Tortilla', precio: 3, stock: 6 },
];
mostrarResultado('Compra 1: Abarrotería (IVA 12%, Guatemala)', compra1);
 
const compra2: Producto[] = [
  { nombre: 'Lapicero', precio: 2.50, stock: 15 },
  { nombre: 'Lapiz', precio: 2, stock: 9 },
  { nombre: 'borrador', precio: 1.50, stock: 8 },
];
mostrarResultado('Compra 2: Libreria (IVA 12%, Guatemala)', compra2);
 