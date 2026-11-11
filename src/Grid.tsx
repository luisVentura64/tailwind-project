const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5', 'Elemento 6']

export function Grid() {
  return (
    <div className="grid-example">
      {items.map((item) => (
        <div className="grid-item" key={item}>{item}</div>
      ))}
    </div>
  )
}
