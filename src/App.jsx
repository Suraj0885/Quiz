import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizApp from './Componets/QuizApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <QuizApp/>
    </>
  )
}

export default App
