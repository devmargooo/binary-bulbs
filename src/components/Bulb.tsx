import BulbIcon from './BulbIcon'

type BulbProps = {
  id: number
  index: number
  total: number
  on: boolean
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

function Bulb({ id, index, total, on, onToggle, onRemove }: BulbProps) {
  return (
    <div className="bulb-slot">
      <button
        type="button"
        className="bulb-slot__button"
        aria-pressed={on}
        aria-label={`Лампочка ${index + 1} из ${total}`}
        onClick={() => onToggle(id)}
      >
        <BulbIcon on={on} />
      </button>
      <button
        type="button"
        className="bulb-slot__remove"
        aria-label="Удалить лампочку"
        onClick={() => onRemove(id)}
      >
        ×
      </button>
    </div>
  )
}

export default Bulb
