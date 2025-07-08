import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

import Navbar from './Navbar';
import Project from './Pages/Project';
import Career from './Pages/Career';
import Notes from './Pages/Notes';
import ServicePage from './Pages/ServicePage';

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      
      <Route path="/" element={< Home />} />
      <Route path = "/Notes" element = {<Notes/>} />
      <Route path = "/About" element = {<About/>} />
       <Route path = "/Service" element = {< ServicePage />} />
      <Route path = "/Project" element = {<Project />} />
      <Route path = "/carrer" element = {< Career />} />
    </Routes>
   </Router>
  )
}

export default App

