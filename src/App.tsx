import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from "./Pages/Landing"

const App = () => {
  return (
    <div className='bg-[#060010]'>
      
      <Routes>
        <Route path="/" element={ <Landing/>} />
      </Routes>
      
    </div>
  )
}

export default App