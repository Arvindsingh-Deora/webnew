import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

import Navbar from './Navbar';
import Project from './Pages/Project';
import Career from './Pages/Career';

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      
      <Route path="/" element={< Home />} />
      <Route path = "/About" element = {<About/>} />
      <Route path = "/Project" element = {<Project />} />
      <Route path = "/carrer" element = {< Career />} />
    </Routes>
   </Router>
  )
}

export default App

