const flexItems = ['Flexible', 'Ordenado', 'Adaptable']

export function Flex() {
  return (
    <div className="flex-demo" aria-label="Ejemplo de elementos con Flexbox">
      {flexItems.map((item, index) => (
        <div className="flex-demo__item" key={item}>
          <span className="flex-demo__number">0{index + 1}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
