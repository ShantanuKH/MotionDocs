import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 flex '>
      <Background/>
      <Foreground/>

      
    </div>
  )
}

export default App
