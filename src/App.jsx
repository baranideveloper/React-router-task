import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './Style.css'
import Career from './pages/Career'
import All from './pages/All'
import Fsd from './pages/Fsd'
import Datascience from './pages/DataScience'
import Cyber from './pages/Cyber'

function App() {

  return (
    <div>
      <h2 className='title'>GUVI COURSES</h2>

      <Router>
        <div  className='display'>
          <Link to='/'>
            <button  className='button'>All</button></Link>
          <Link to='/fsd'>
            <button  className='button'>FSD</button></Link>
          <Link to='/datascience'>
            <button  className='button'>DataScience</button></Link>
          <Link to='/cyber'>
            <button  className='button'>CyberSecurity</button></Link>
          <Link to='/career'>
            <button  className='button'>Career</button></Link>
        </div>
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/fsd' element={<Fsd />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/cyber' element={<Cyber />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
