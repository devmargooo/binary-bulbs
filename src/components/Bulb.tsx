import BulbIcon from './BulbIcon'

type BulbProps = {
  index: number
  total: number
  on: boolean
  onToggle: (index: number) => void
  onRemove: (index: number) => void
}

function Bulb({ index, total, on, onToggle, onRemove }: BulbProps) {
  return (
    <div className="bulb-slot">
      <button
        type="button"
        className="bulb-slot__button"
        aria-pressed={on}
        aria-label={`Лампочка ${index + 1} из ${total}`}
        onClick={() => onToggle(index)}
      >
        <BulbIcon on={on} />
      </button>
      <button
        type="button"
        className="bulb-slot__remove"
        aria-label="Удалить лампочку"
        onClick={() => onRemove(index)}
      >
        ×
      </button>
    </div>
  )
}

export default Bulb
