import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Gallery3 from './galleries/Gallery3'
import {BrowserRouter , Route , Routes , Navigate} from 'react-router-dom'
import Gallery1 from './galleries/Gallery1'
import Gallery2 from './galleries/Gallery2'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element = {<Home/>} />
            <Route path='/Gallery1' element = {<Gallery1/>} />
            <Route path='/Gallery2'element = {<Gallery2/>} />
            <Route path='/Galllery3' element = {<Gallery3/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App