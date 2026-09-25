type TernaryControlsProps = {
  onCheck: () => void
  onReset: () => void
  onAdd: () => void
}

function TernaryControls({ onCheck, onReset, onAdd }: TernaryControlsProps) {
  return (
    <div className="tcontrols">
      <button type="button" className="tcontrols__button" onClick={onCheck}>
        Проверить
      </button>
      <button type="button" className="tcontrols__button" onClick={onReset}>
        Начать заново
      </button>
      <button type="button" className="tcontrols__button" onClick={onAdd}>
        Добавить лампочку
      </button>
    </div>
  )
}

export default TernaryControls
