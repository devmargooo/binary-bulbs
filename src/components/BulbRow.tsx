import Bulb from './Bulb'

type BulbRowProps = {
  lamps: boolean[]
  onToggle: (index: number) => void
  onRemove: (index: number) => void
}

function BulbRow({ lamps, onToggle, onRemove }: BulbRowProps) {
  return (
    <div className="bulb-row">
      <div className="bulb-row__list">
        {lamps.map((on, index) => (
          <Bulb
            key={index}
            index={index}
            total={lamps.length}
            on={on}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default BulbRow
