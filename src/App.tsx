import './App.css'
import { Flex } from './Flex'
import { Grid } from './Grid'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#app" aria-label="Inicio: Proyecto responsive">
          <span className="brand__mark">R</span>
          <span>Proyecto responsive</span>
        </a>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#app">App</a>
          <a href="#flex">Flex</a>
          <a href="#grid">Grid</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="app">
          <div className="hero__copy">
            <p className="eyebrow">Práctica de frontend · 2026</p>
            <h1>Una interfaz, <span>tres formas</span> de explorar.</h1>
            <p className="hero__description">
              Una pequeña muestra de componentes web con App, Flexbox y CSS Grid,
              adaptados para móvil, tablet y escritorio.
            </p>
            <a className="button-link" href="#grid">Explorar el grid <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-card" aria-label="Resoluciones adaptables">
            <span className="hero-card__label">Diseño responsive</span>
            <div className="screen-preview screen-preview--desktop"><span /></div>
            <div className="screen-preview screen-preview--tablet"><span /></div>
            <div className="screen-preview screen-preview--mobile"><span /></div>
            <div className="hero-card__sizes"><span>Móvil</span><span>Tablet</span><span>Escritorio</span></div>
          </div>
        </section>

        <section className="content-section section-wrap" id="flex">
          <div className="section-heading">
            <p className="eyebrow">01 / Flexbox</p>
            <h2>Distribución en una dimensión</h2>
            <p>Flexbox organiza elementos en una fila y mantiene un espaciado uniforme.</p>
          </div>
          <Flex />
        </section>

        <section className="content-section section-wrap grid-section" id="grid">
          <div className="section-heading">
            <p className="eyebrow">02 / CSS Grid</p>
            <h2>Una cuadrícula para cada pantalla</h2>
            <p>El número de columnas cambia según el ancho, sin desbordamientos.</p>
          </div>
          <Grid />
          <p className="grid-breakpoints">
            <span><i className="breakpoint-dot breakpoint-dot--mobile" /> Móvil: 1 columna</span>
            <span><i className="breakpoint-dot breakpoint-dot--tablet" /> Tablet (600 px): 2 columnas</span>
            <span><i className="breakpoint-dot breakpoint-dot--desktop" /> Escritorio (900 px): 3 columnas</span>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>Proyecto responsive</span>
        <a href="#app">Volver arriba ↑</a>
      </footer>
    </>
  )
}

export default App
