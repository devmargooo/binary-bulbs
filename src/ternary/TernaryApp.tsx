import { useEffect, useReducer } from 'react'
import TernaryBulbRow from './components/TernaryBulbRow'
import TernaryControls from './components/TernaryControls'
import TernaryResult from './components/TernaryResult'
import { createInitialState, getTernary, getValue, reducer } from './ternary'
import './TernaryApp.css'

function TernaryApp() {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState)

  useEffect(() => {
    document.title = 'Троичные лампочки'
  }, [])

  return (
    <main className="tapp">
      <h1 className="tapp__title">Троичные лампочки</h1>
      <TernaryBulbRow
        lamps={state.lamps}
        onCycle={(id) => dispatch({ type: 'CYCLE', id })}
        onRemove={(id) => dispatch({ type: 'REMOVE', id })}
      />
      <TernaryControls
        onCheck={() => dispatch({ type: 'CHECK' })}
        onReset={() => dispatch({ type: 'RESET' })}
        onAdd={() => dispatch({ type: 'ADD' })}
      />
      <TernaryResult
        value={getValue(state.lamps)}
        ternary={getTernary(state.lamps)}
        visible={state.showResult}
      />
    </main>
  )
}

export default TernaryApp
