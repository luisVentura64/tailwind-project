import './App.css'
import { Flex } from './Flex'
import { Grid } from './Grid'

function App() {
  return (
    <>
      <nav className="navigation">
        <a href="#app">App</a>
        <a href="#flex">Flex</a>
        <a href="#grid">Grid</a>
      </nav>

      <main>
        <section className="example-section" id="app">
          <h1>Mi aplicación con Tailwind!</h1>
          <button className="send-button">Enviar</button>
          <div className="basic-container">Este es un contenedor</div>
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
    </>
  )
}

export default App
