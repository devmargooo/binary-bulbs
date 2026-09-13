import { useReducer } from 'react'
import BulbRow from './components/BulbRow'
import Controls from './components/Controls'
import Result from './components/Result'
import type { Lamp } from './types'
import './App.css'

const INITIAL_LAMPS = 5

type State = {
  lamps: Lamp[]
  nextId: number
  showResult: boolean
}

type Action =
  | { type: 'TOGGLE'; id: number }
  | { type: 'ADD' }
  | { type: 'REMOVE'; id: number }
  | { type: 'RESET' }
  | { type: 'CHECK' }

function createInitialLamps(): Lamp[] {
  return Array.from({ length: INITIAL_LAMPS }, (_, id) => ({ id, on: false }))
}

const initialState: State = {
  lamps: createInitialLamps(),
  nextId: INITIAL_LAMPS,
  showResult: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        lamps: state.lamps.map((lamp) =>
          lamp.id === action.id ? { ...lamp, on: !lamp.on } : lamp,
        ),
        showResult: false,
      }
    case 'ADD':
      return {
        ...state,
        lamps: [{ id: state.nextId, on: false }, ...state.lamps],
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
      return initialState
    case 'CHECK':
      return { ...state, showResult: true }
  }
}

function getValue(lamps: Lamp[]): bigint {
  return lamps.reduce((value, lamp) => value * 2n + (lamp.on ? 1n : 0n), 0n)
}

function getBinary(lamps: Lamp[]): string {
  if (lamps.length === 0) {
    return '0'
  }
  return lamps.map((lamp) => (lamp.on ? '1' : '0')).join('')
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main className="app">
      <h1 className="app__title">Бинарные лампочки</h1>
      <BulbRow
        lamps={state.lamps}
        onToggle={(id) => dispatch({ type: 'TOGGLE', id })}
        onRemove={(id) => dispatch({ type: 'REMOVE', id })}
      />
      <Controls
        onCheck={() => dispatch({ type: 'CHECK' })}
        onReset={() => dispatch({ type: 'RESET' })}
        onAdd={() => dispatch({ type: 'ADD' })}
      />
      <Result
        value={getValue(state.lamps)}
        binary={getBinary(state.lamps)}
        visible={state.showResult}
      />
    </main>
  )
}

export default App
