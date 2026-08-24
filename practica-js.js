const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Audio', stock: 10 },
  { id: 5, nombre: 'Cámara Web', precio: 150000, categoria: 'Perifericos', stock: 2 },
  { id: 6, nombre: 'Micrófono', precio: 250000, categoria: 'Audio', stock: 0 },
  { id: 7, nombre: 'Disco Duro SSD', precio: 300000, categoria: 'Almacenamiento', stock: 8 },
  { id: 8, nombre: 'Memoria RAM', precio: 180000, categoria: 'Componentes', stock: 15 },
  { id: 9, nombre: 'Tarjeta de Video', precio: 1200000, categoria: 'Componentes', stock: 4 },
  { id: 10, nombre: 'Cable HDMI', precio: 25000, categoria: 'Accesorios', stock: 20 }
];

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log(hayAgotados);

const precioCaro = productos.some(producto => producto.precio > 1000000);
console.log(precioCaro);

const preciosPositivos = productos.every(producto => producto.precio > 0);
console.log(preciosPositivos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log(stockValido);

const valorInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log(valorInventario);