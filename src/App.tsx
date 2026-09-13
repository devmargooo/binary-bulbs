import { useReducer } from 'react'
import BulbRow from './components/BulbRow'
import Controls from './components/Controls'
import Result from './components/Result'
import './App.css'

const INITIAL_LAMPS = 5

type State = {
  lamps: boolean[]
  showResult: boolean
}

type Action =
  | { type: 'TOGGLE'; index: number }
  | { type: 'ADD' }
  | { type: 'REMOVE'; index: number }
  | { type: 'RESET' }
  | { type: 'CHECK' }

const initialState: State = {
  lamps: Array<boolean>(INITIAL_LAMPS).fill(false),
  showResult: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        lamps: state.lamps.map((on, index) =>
          index === action.index ? !on : on,
        ),
        showResult: false,
      }
    case 'ADD':
      return { ...state, lamps: [false, ...state.lamps], showResult: false }
    case 'REMOVE':
      return {
        ...state,
        lamps: state.lamps.filter((_, index) => index !== action.index),
        showResult: false,
      }
    case 'RESET':
      return initialState
    case 'CHECK':
      return { ...state, showResult: true }
  }
}

function getValue(lamps: boolean[]): bigint {
  return lamps.reduce((value, on) => value * 2n + (on ? 1n : 0n), 0n)
}

function getBinary(lamps: boolean[]): string {
  if (lamps.length === 0) {
    return '0'
  }
  return lamps.map((on) => (on ? '1' : '0')).join('')
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main className="app">
      <h1 className="app__title">Бинарные лампочки</h1>
      <BulbRow
        lamps={state.lamps}
        onToggle={(index) => dispatch({ type: 'TOGGLE', index })}
        onRemove={(index) => dispatch({ type: 'REMOVE', index })}
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
