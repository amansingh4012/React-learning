import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  const myobj = {
    name: "Aman",
    age: 5
  }

  let newArr = [1,2,3,45,6]

  return (
  
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
    <Cards  price = "100" itemNo="#50"/>
    < Cards price = "200"/>
  </>
  )
}

export default App
