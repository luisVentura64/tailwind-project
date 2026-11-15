import { useState } from 'react'
import './App.css'
import { Flex } from './components/Flex'
import { Form } from './components/Form'
import { Grid } from './components/Grid'
import Boton from './components/boton'
function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <nav className="navigation">
        <a href="#app">App</a>
        <a href="#form">Form</a>
        <a href="#flex">Flex</a>
        <a href="#grid">Grid</a>
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={darkMode}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Modo claro' : 'Modo oscuro'}
        </button>
      </nav>

      <main>
        <section className="example-section" id="app">
          <h1>Mi aplicación con Tailwind!</h1>
          <div className="p-6 flex gap-4">
            <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
              Guardar Cambios
            </Boton>
            <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
              Cancelar
            </Boton>
            <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
              Eliminar Usuario
            </Boton>
          </div>
          <div className="basic-container">Este es un contenedor</div>
        </section>

        <section className="example-section" id="form">
          <Form />
        </section>

        <section className="example-section" id="flex">
          <h2>Flex</h2>
          <Flex />
        </section>

        <section className="example-section" id="grid">
          <h2>Grid responsive</h2>
          <Grid />
        </section>
      </main>
    </div>
  )
}

export default App
