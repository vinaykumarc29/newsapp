import './App.css';
import React, { useState , useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const  App =()=> {

  const apikey = process.env.REACT_APP_NEWS_API_KEY

  const [progress,setprogress] = useState(0);
  const [mode,setmode] =useState(() => localStorage.getItem("theme") || "light");

  

  const setProgress = (progress)=>{
    setprogress(progress)
  };

  const changemode=()=>{
    const newmode = mode ==="light"?"dark":"light";
    setmode(newmode);
    localStorage.setItem("theme",newmode);
  }

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
      <Navbar mode={mode}  changemode={changemode} />

      <LoadingBar
        color="#38bfe0"
        height ={2}
        progress={progress}
       />
      <Routes>
      <Route path='/' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="home" country="in" category={""} />} />
            <Route path='/business' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="business" category="business" country="in" />} />
            <Route path='/crime' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="crime" category="crime" country="in" />} />
            <Route path='/education' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="education" category="education" country="in" />} />
            <Route path='/entertainment' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="entertainment" category="entertainment" country="in" />} />
            <Route path='/health' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="health" category="health" country="in" />} />
            <Route path='/politics' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="politics" category="politics" country="in" />} />
            <Route path='/technology' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="technology" category="technology" country="in" />} />
            <Route path='/sports' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="sports" category="sports" country="in" />} />
            <Route path='/world' element={<News mode={mode}  progress={setProgress} apikey={apikey} key="world" category="world" country="in" />} />
      </Routes>

     </Router>
     </>
    );
  }

export default App;
