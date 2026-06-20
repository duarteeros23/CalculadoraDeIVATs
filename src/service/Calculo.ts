import { Producto } from "../model/Producto";
import { Resultado } from "../model/Resultado";

export const IVA = 0.12;

export function calcularSubtotal(productos: Producto[]): number {
  return productos.reduce(
    (acumulado, producto) => acumulado + producto.precio * producto.stock,
    0
  );
}

export function calcularIVA(subtotal: number, tasaIva: number = IVA): number {
  if (tasaIva < 0) {
    throw new Error("La tasa de IVA no puede ser negativa");
  }
  return subtotal * tasaIva;
}

export function calcularTotal(subtotal: number, iva: number): number {
  return subtotal + iva;
}