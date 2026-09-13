type ResultProps = {
  value: bigint
  binary: string
  visible: boolean
}

function Result({ value, binary, visible }: ResultProps) {
  return (
    <p className="result" aria-live="polite">
      {visible ? `Результат: ${value} (${binary})` : ''}
    </p>
  )
}

export default Result
