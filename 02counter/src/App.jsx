import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks 
  let [counter, setCounter] = useState(1)


  // let counter = 15;

  const addValue = () => {
    console.log('clicked', counter)
     if(counter == 20) return
    
    counter = counter +1;
    setCounter(counter)
  }

    const minusValue = () => {
   if(counter == 0) return
    counter = counter -1;
   console.log('clicked', counter) 
    setCounter(counter)
  }



  return (
   <>
    <h1> chai aur react </h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={minusValue} >decrease value</button>
   </>
  )
}

export default App
