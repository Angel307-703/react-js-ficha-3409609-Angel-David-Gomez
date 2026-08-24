const cuadrado = numero => numero * numero;

// 2. Convertir esMayorEdad(edad) a arrow function
const esMayorEdad = (edad) => {
    return edad >= 18;
};

// 3. Crear nombreCompleto(nombre, apellido) como arrow function
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

// --- Ejecución y comprobación de resultados ---
console.log("Resultado cuadrado (5):", cuadrado(5));          // Esperado: 25
console.log("Resultado mayor de edad (20):", esMayorEdad(20)); // Esperado: true
console.log("Nombre completo:", nombreCompleto("Angel", "David"));