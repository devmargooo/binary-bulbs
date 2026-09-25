import TernaryBulb from './TernaryBulb'
import type { TernaryLamp } from '../types'

type TernaryBulbRowProps = {
  lamps: TernaryLamp[]
  onCycle: (id: number) => void
  onRemove: (id: number) => void
}

function TernaryBulbRow({ lamps, onCycle, onRemove }: TernaryBulbRowProps) {
  return (
    <div className="tbulb-row">
      <div className="tbulb-row__list">
        {lamps.map((lamp, index) => (
          <TernaryBulb
            key={lamp.id}
            id={lamp.id}
            index={index}
            total={lamps.length}
            digit={lamp.digit}
            onCycle={onCycle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default TernaryBulbRow
