import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [orden, setOrden] = useState("defecto");

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;
    
    return coincideNombre && coincideCategoria && coincideStock; 
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (orden === "menor-mayor") {
      return a.precio - b.precio;
    } else if (orden === "mayor-menor") {
      return b.precio - a.precio;
    }
    return 0;
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      
      <p>Productos encontrados: {productosOrdenados.length}</p>
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

      <select
        value={orden}
        onChange={(evento) => setOrden(evento.target.value)}
      >
        <option value="defecto">Sin orden</option>
        <option value="menor-mayor">Menor precio primero</option>
        <option value="mayor-menor">Mayor precio primero</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      {productosOrdenados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      <section className="productos">
        {productosOrdenados.map(producto => (
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