import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
     <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<News key="home" country="in" />} />
            <Route path='/business' element={<News key="business" category="business" country="in" />} />
            <Route path='/crime' element={<News key="crime" category="crime" country="in" />} />
            <Route path='/education' element={<News key="education" category="education" country="in" />} />
            <Route path='/entertainment' element={<News key="entertainment" category="entertainment" country="in" />} />
            <Route path='/health' element={<News key="health" category="health" country="in" />} />
            <Route path='/politics' element={<News key="politics" category="politics" country="in" />} />
            <Route path='/technology' element={<News key="technology" category="technology" country="in" />} />
            <Route path='/sports' element={<News key="sports" category="sports" country="in" />} />
            <Route path='/world' element={<News key="world" category="world" country="in" />} />
      </Routes>

     </Router>
     
     </>
    )
  }
}

