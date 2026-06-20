1. Defini el modelo de producto
-En src/model/Producto.ts defini interface de producto 

2. Defini el modelo de resultado
-En src/model/Resultado.ts defini interface de resultado

3. Crear el modulo de calculos
-Cree las funciones de:
 -Iva: con tasa del 12%
 -calcularSubtotal: suma precio * stock del arreglo de productos
 -calcularIVA: subtotal * 0.12
 -calcularTotal: subtotal + IVA

4. Crear el modulo de la compra
-ProcesarCompra llama a las funciones de calculo y devuelve el resultado

5. Crear los datos de prueba y devolver el resultado
-Se crea mostrarResultado que llama a procesarCompra e imprime los datosx
-Se crean los datos de prueba de abarroteria y libreria y se devuelve el resultado
