import TernaryBulbIcon from './TernaryBulbIcon'
import { DIGIT_WORDS } from '../types'
import type { Digit } from '../types'

type TernaryBulbProps = {
  id: number
  index: number
  total: number
  digit: Digit
  onCycle: (id: number) => void
  onRemove: (id: number) => void
}

function TernaryBulb({ id, index, total, digit, onCycle, onRemove }: TernaryBulbProps) {
  return (
    <div className="tbulb-slot" data-value={digit}>
      <button
        type="button"
        className="tbulb-slot__button"
        aria-label={`Лампочка ${index + 1} из ${total}, значение ${digit} — ${DIGIT_WORDS[digit]}`}
        onClick={() => onCycle(id)}
      >
        <TernaryBulbIcon id={id} digit={digit} />
      </button>
      <button
        type="button"
        className="tbulb-slot__remove"
        aria-label="Удалить лампочку"
        onClick={() => onRemove(id)}
      >
        ×
      </button>
    </div>
  )
}

export default TernaryBulb
