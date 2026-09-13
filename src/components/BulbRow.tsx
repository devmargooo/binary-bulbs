import Bulb from './Bulb'
import type { Lamp } from '../types'

type BulbRowProps = {
  lamps: Lamp[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

function BulbRow({ lamps, onToggle, onRemove }: BulbRowProps) {
  return (
    <div className="bulb-row">
      <div className="bulb-row__list">
        {lamps.map((lamp, index) => (
          <Bulb
            key={lamp.id}
            id={lamp.id}
            index={index}
            total={lamps.length}
            on={lamp.on}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default BulbRow
