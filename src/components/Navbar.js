import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link  to="/" className="navbar-brand">News One</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/business" className="nav-link active" >Business</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/crime" className="nav-link" >Crime</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/education" className="nav-link" >Education</Link>

                </li>
                <li className="nav-item">
                  <Link  to="/entertainment" className="nav-link" >Entertainment</Link>
                </li>
                <li className="nav-item">

                  <Link  to="/health" className="nav-link" >Health</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/politics" className="nav-link" >Politics</Link>

                </li>
                <li className="nav-item">
                  <Link  to="/technology" className="nav-link" >Technology</Link>

                </li>
                <li className="nav-item">
                  <Link  to="/sports" className="nav-link" >Sports</Link>

                </li>
                <li className="nav-item">
                  <Link  to="/world" className="nav-link" >World</Link>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar