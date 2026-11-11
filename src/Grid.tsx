const gridItems = [
  { number: '01', title: 'Diseño adaptable', description: 'Las columnas se ajustan al espacio disponible.' },
  { number: '02', title: 'Móvil primero', description: 'Una columna para pantallas pequeñas.' },
  { number: '03', title: 'Espacio equilibrado', description: 'Separación consistente entre tarjetas.' },
  { number: '04', title: 'Tablet', description: 'Dos columnas a partir de 600 px.' },
  { number: '05', title: 'Escritorio', description: 'Tres columnas a partir de 900 px.' },
  { number: '06', title: 'CSS Grid', description: 'Una cuadrícula clara, sin dependencias extra.' },
]

export function Grid() {
  return (
    <div className="grid-demo">
      {gridItems.map((item) => (
        <article className="grid-card" key={item.number}>
          <span className="grid-card__number">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}
