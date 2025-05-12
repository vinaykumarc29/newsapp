import React from 'react'
import Loadingcards from './Loadingcards'
//BootStrap loading card
// This component is used to display a loading animation for the news cards
// It uses the Loadingcards component to create multiple loading cards

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

