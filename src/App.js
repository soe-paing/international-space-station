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
          <Route path='/iss/' element={<Home/>}/>
          <Route path='/iss/live' element={<LocationISS/>}/>
          <Route path='/iss/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}
