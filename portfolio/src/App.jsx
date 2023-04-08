import { useState } from 'react'
import Folio from './components/Folio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Folio/>
    </div>
  )
}

export default App
