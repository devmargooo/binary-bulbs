export type Digit = 0 | 1 | 2

export type TernaryLamp = {
  id: number
  digit: Digit
}

export type TernaryState = {
  lamps: TernaryLamp[]
  nextId: number
  showResult: boolean
}

export type TernaryAction =
  | { type: 'CYCLE'; id: number }
  | { type: 'ADD' }
  | { type: 'REMOVE'; id: number }
  | { type: 'RESET' }
  | { type: 'CHECK' }

export const DIGIT_WORDS: Record<Digit, string> = {
  0: 'погашена',
  1: 'горит наполовину',
  2: 'горит полностью',
}
