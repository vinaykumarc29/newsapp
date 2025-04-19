import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API_KEY

  state= {
    progress:0
  };

  setProgress= (progress)=>{
    this.setState({progress:progress});
  };


  render() {
    return (
     <>
    <Router>
      <Navbar/>

      <LoadingBar
        color="#38bfe0"
        height ={2}
        progress={this.state.progress}
       />
      <Routes>
      <Route path='/' element={<News  progress={this.setProgress} apikey={this.apikey} key="home" country="in" />} />
            <Route path='/business' element={<News  progress={this.setProgress} apikey={this.apikey} key="business" category="business" country="in" />} />
            <Route path='/crime' element={<News  progress={this.setProgress} apikey={this.apikey} key="crime" category="crime" country="in" />} />
            <Route path='/education' element={<News  progress={this.setProgress} apikey={this.apikey} key="education" category="education" country="in" />} />
            <Route path='/entertainment' element={<News  progress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" country="in" />} />
            <Route path='/health' element={<News  progress={this.setProgress} apikey={this.apikey} key="health" category="health" country="in" />} />
            <Route path='/politics' element={<News  progress={this.setProgress} apikey={this.apikey} key="politics" category="politics" country="in" />} />
            <Route path='/technology' element={<News  progress={this.setProgress} apikey={this.apikey} key="technology" category="technology" country="in" />} />
            <Route path='/sports' element={<News  progress={this.setProgress} apikey={this.apikey} key="sports" category="sports" country="in" />} />
            <Route path='/world' element={<News  progress={this.setProgress} apikey={this.apikey} key="world" category="world" country="in" />} />
      </Routes>

     </Router>
     </>
    );
  }
}

