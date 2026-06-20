import { Producto } from "../model/Producto";
import { Resultado } from "../model/Resultado";
import { calcularSubtotal, calcularIVA, calcularTotal, IVA } from "./Calculo";

export function procesarCompra(
  productos: Producto[],
  tasaIva: number = IVA
): Resultado {
  const subtotal = calcularSubtotal(productos);
  const iva = calcularIVA(subtotal, tasaIva);
  const total = calcularTotal(subtotal, iva);

  return { subtotal, iva, total };
}