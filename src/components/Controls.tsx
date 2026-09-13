type ControlsProps = {
  onCheck: () => void
  onReset: () => void
  onAdd: () => void
}

function Controls({ onCheck, onReset, onAdd }: ControlsProps) {
  return (
    <div className="controls">
      <button type="button" className="controls__button" onClick={onCheck}>
        Проверить
      </button>
      <button type="button" className="controls__button" onClick={onReset}>
        Начать заново
      </button>
      <button type="button" className="controls__button" onClick={onAdd}>
        Добавить лампочку
      </button>
    </div>
  )
}

export default Controls
