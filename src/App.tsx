import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoView from './components/TodoView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoView/>
    </>
  )
}

export default App
