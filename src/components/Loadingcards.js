import React from 'react'
//BootStrap loading card 
// This component is used to display a loading animation for the news cards
// It uses the Loadingcards component to create multiple loading cards

const Loadingcards = ()=> {
    return (
        <>
       
       <div className="card m-3" aria-hidden="true" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <button className="btn-sm btn-primary disabled placeholder col-6" aria-disabled="true"></button>
    </div>
  </div>
      
      </>
  )}

  export default Loadingcards