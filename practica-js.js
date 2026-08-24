function sumar(a, b) {
    return a + b;
}
console.log("Suma:", sumar(10, 5));

function restar(a, b) {
    return a - b;
}
console.log("Resta:", restar(20, 8));

function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicación:", multiplicar(4, 5));

function dividir(a, b) {
    return a / b;
}
console.log("División:", dividir(100, 4));

function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}
console.log("Promedio:", calcularPromedio(4.5, 3.8, 5.0));

/* 
Diferencia entre console.log() y return
- console.log(): Solo muestra un valor en la terminal para que nosotros lo veamos, 
  pero la computadora no puede "usar" ese dato para otros cálculos después.
- return: Envía el resultado de la función hacia afuera para que pueda ser 
  guardado en una variable o utilizado por otra parte del código.
*/
