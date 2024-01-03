import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewNote from './components/NewNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewNote />
    </>
  )
}

export default App
