import type { Digit, TernaryAction, TernaryLamp, TernaryState } from './types'

export const INITIAL_LAMPS = 5

export function createInitialLamps(): TernaryLamp[] {
  return Array.from({ length: INITIAL_LAMPS }, (_, id) => ({ id, digit: 0 as Digit }))
}

export function createInitialState(): TernaryState {
  return {
    lamps: createInitialLamps(),
    nextId: INITIAL_LAMPS,
    showResult: false,
  }
}

function nextDigit(digit: Digit): Digit {
  return ((digit + 1) % 3) as Digit
}

export function reducer(state: TernaryState, action: TernaryAction): TernaryState {
  switch (action.type) {
    case 'CYCLE':
      return {
        ...state,
        lamps: state.lamps.map((lamp) =>
          lamp.id === action.id ? { ...lamp, digit: nextDigit(lamp.digit) } : lamp,
        ),
        showResult: false,
      }
    case 'ADD':
      return {
        ...state,
        lamps: [{ id: state.nextId, digit: 0 as Digit }, ...state.lamps],
        nextId: state.nextId + 1,
        showResult: false,
      }
    case 'REMOVE':
      return {
        ...state,
        lamps: state.lamps.filter((lamp) => lamp.id !== action.id),
        showResult: false,
      }
    case 'RESET':
      return createInitialState()
    case 'CHECK':
      return { ...state, showResult: true }
  }
}

export function getValue(lamps: TernaryLamp[]): bigint {
  return lamps.reduce((value, lamp) => value * 3n + BigInt(lamp.digit), 0n)
}

export function getTernary(lamps: TernaryLamp[]): string {
  if (lamps.length === 0) {
    return '0'
  }
  return lamps.map((lamp) => String(lamp.digit)).join('')
}
