import React from 'react'
import Loadingcards from './Loadingcards'

const LoadingCardAnimation = ()=> {
    return (
      <>
       <div className="container d-flex justify-content-row">
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
     </div>
     <div className="container d-flex justify-content-row">
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
     </div>
     <div className="container d-flex justify-content-row">
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
      <Loadingcards/>
     </div>
      
      </>
    )
  }

  export default LoadingCardAnimation

