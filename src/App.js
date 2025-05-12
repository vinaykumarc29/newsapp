import './App.css';
import React, { useState , useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const  App =()=> {

  // API key for fetching news data from the environment variables
  const apikey = process.env.REACT_APP_NEWS_API_KEY

  // State to manage the progress of the loading bar
  const [progress,setprogress] = useState(0);

  // State to manage the theme mode (light or dark)
  const [mode,setmode] =useState(() => localStorage.getItem("theme") || "light");

  // Function to update the progress of the loading bar
  const setProgress = (progress)=>{
    setprogress(progress)
  };

  // Function to toggle between light and dark mode
  const changemode=()=>{
    const newmode = mode ==="light"?"dark":"light";
    setmode(newmode);
    localStorage.setItem("theme",newmode); // Save the selected mode in local storage
  }

  // Effect to apply the selected theme mode to the document body
  useEffect(()=>{
    if(mode === "light"){
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }else{
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
    }
  },[mode])

  return (
     <>
    <Router>
      {/* Navbar component with theme mode and toggle function */}
      <Navbar mode={mode}  changemode={changemode} />

      {/* Loading bar to indicate progress */}
      <LoadingBar
        color="#38bfe0"
        height ={2}
        progress={progress}
       />

      {/* Define routes for different news categories */}
      <Routes>
        {/* Home route with no specific category */}
        <Route path='/' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="home" country="in" category={""} />} />
        {/* Business news route */}
        <Route path='/business' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="business" category="business" country="in" />} />
        {/* Crime news route */}
        <Route path='/crime' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="crime" category="crime" country="in" />} />
        {/* Education news route */}
        <Route path='/education' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="education" category="education" country="in" />} />
        {/* Entertainment news route */}
        <Route path='/entertainment' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="entertainment" category="entertainment" country="in" />} />
        {/* Health news route */}
        <Route path='/health' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="health" category="health" country="in" />} />
        {/* Politics news route */}
        <Route path='/politics' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="politics" category="politics" country="in" />} />
        {/* Technology news route */}
        <Route path='/technology' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="technology" category="technology" country="in" />} />
        {/* Sports news route */}
        <Route path='/sports' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="sports" category="sports" country="in" />} />
        {/* World news route */}
        <Route path='/world' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="world" category="world" country="in" />} />
      </Routes>

     </Router>
     </>
    );
  }

export default App;
