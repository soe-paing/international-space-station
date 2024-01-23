import React from 'react';
import Nav from './component/Nav';
import LocationISS from './component/LocationISS';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

export default function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/live' element={<LocationISS/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}
