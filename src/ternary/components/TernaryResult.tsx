type TernaryResultProps = {
  value: bigint
  ternary: string
  visible: boolean
}

function TernaryResult({ value, ternary, visible }: TernaryResultProps) {
  return (
    <p className="tresult" aria-live="polite">
      {visible ? `Результат: ${value} (${ternary})` : ''}
    </p>
  )
}

export default TernaryResult
