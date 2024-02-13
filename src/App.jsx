import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Child1 from './Component/Child1'

export const theme = React.createContext()


function App() {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState(state => !state)
  }

  return (
    <div>
      <theme.Provider value={state}>
        <button onClick={handleToggle} className='toggle'>Toggle</button>
        <Child1/>
      </theme.Provider>
    </div>
  )
}

export default App