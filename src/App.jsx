import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  // Estados (Punto 5 y Punto 8)
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  // Cálculos iniciales de tu código
  const disponibles = productos.filter(producto => producto.stock > 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  // Lógica de filtrado combinada (Punto 6 y Punto 8)
  const productosFiltrados = productos.filter(producto => {
    // Revisa si el texto de búsqueda coincide
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    // Revisa si la categoría coincide o si está en "Todas"
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    
    // Retorna true solo si cumple ambas condiciones
    return coincideNombre && coincideCategoria;
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      {/* Input de búsqueda (Punto 5) */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      {/* Selector de categoría (Punto 8) */}
      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
      </select>

      {/* Mensaje si no hay resultados (Punto 7) */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      <section className="productos">
        {/* Cambiamos 'productos.map' por 'productosFiltrados.map' (Punto 6) */}
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>
    </main>
  );
}

export default App;