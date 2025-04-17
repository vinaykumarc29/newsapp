import React, { Component } from 'react'
import Loadingcards from './Loadingcards'

export default class LoadingCardAnimation extends Component {
  render() {
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
}
