import type { CSSProperties } from 'react'
import type { Digit } from '../types'

type TernaryBulbIconProps = {
  id: number
  digit: Digit
}

const GLASS_D =
  'M60 20 C37 20 22 37 22 59 C22 75 30 84 38 94 C42 99 44 105 44 111 H76 C76 105 78 99 82 94 C90 84 98 75 98 59 C98 37 83 20 60 20Z'

const FILAMENT_D = 'M48 70 C48 57 53 52 60 52 C67 52 72 57 72 70 M48 70 L48 88 M72 70 L72 88'

function TernaryBulbIcon({ id, digit }: TernaryBulbIconProps) {
  const glassId = `tbulb-glass-${id}`
  const filamentId = `tbulb-filament-${id}`
  const clipId = `tbulb-half-${id}`

  const className = [
    'tbulb',
    digit === 2 ? 'is-on' : '',
    digit === 1 ? 'is-half' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <svg
      className={className}
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ '--half-clip': `url(#${clipId})` } as CSSProperties}
    >
      <defs>
        <path id={glassId} d={GLASS_D} />
        <path id={filamentId} d={FILAMENT_D} />
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <rect x="0" y="80" width="120" height="80" />
        </clipPath>
      </defs>

      <g className="tbulb__rays">
        <line x1="60" y1="8" x2="60" y2="22" />
        <line x1="27" y1="18" x2="35" y2="30" />
        <line x1="93" y1="18" x2="85" y2="30" />
        <line x1="10" y1="50" x2="24" y2="54" />
        <line x1="110" y1="50" x2="96" y2="54" />
      </g>

      <use className="tbulb__glass" href={`#${glassId}`} />

      <use className="tbulb__filament" href={`#${filamentId}`} />

      {digit > 0 && (
        <>
          <use className="tbulb__glass-lit" href={`#${glassId}`} />

          <use className="tbulb__filament-lit" href={`#${filamentId}`} />
        </>
      )}

      <path className="tbulb__base" d="M43 111 H77 L75 120 H45 Z" />

      <path
        className="tbulb__thread"
        d="
          M44 116 H76
          M45 122 H75
          M47 128 H73
          M49 134 H71
        "
      />

      <path
        className="tbulb__contact"
        d="M49 139 H71 C70 145 66 149 60 149 C54 149 50 145 49 139Z"
      />
    </svg>
  )
}

export default TernaryBulbIcon
