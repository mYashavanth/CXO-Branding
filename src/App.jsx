import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import LandingPage from './Components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  )
}

export default App
