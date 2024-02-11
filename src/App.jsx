import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BillSplitterApp from './components/BillSplitterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen w-full bg-blue-100 flex justify-center items-center'>
        <BillSplitterApp/>
      </div>
    </>
  )
}

export default App
