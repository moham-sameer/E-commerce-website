import React from 'react'
import Home from './Components/Home'
import Cart from './Components/Cart'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Protected from './Components/Protected'
import Landing from './Components/Landing'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={ <Landing/>}/>
      <Route path='/home' element={ <Protected Cmp={Home}/>}/>
      <Route path='/cart' element={ <Protected Cmp={Cart}/>}/>
       <Route path='/About' element={<Protected Cmp={About}/>} />
       <Route path='/Services' element={<Protected Cmp={Services} />} />
       <Route path='/Contact' element={<Protected Cmp={Contact} />} />
       {/* <Route path='/login' element={<Login/>} /> */}
    </Routes>
     

    </Router>
    </div>
  )
}

export default App
