import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false); // Punto 9

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0; // Punto 9
    
    return coincideNombre && coincideCategoria && coincideStock; 
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      
      <p>Productos encontrados: {productosFiltrados.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      <section className="productos">
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