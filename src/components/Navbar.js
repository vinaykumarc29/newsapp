import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  // Function to handle the theme change (light/dark mode)
  const handlechangemode = () => {
    props.changemode();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-body-tertiary"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          {/* Brand name linking to the home page */}
          <Link to="/" className="navbar-brand">
            News One
          </Link>

          {/* Offcanvas toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas menu itself */}
          <div
            className="offcanvas offcanvas-start w-50"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Categories
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline  flex-grow-1 pe-3">
                {/* Toggle button for theme change */}
                <input type="checkbox"
                  className="btn-check "
                  id="btn-check-outlined"
                  onClick={handlechangemode}
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btn-check-outlined"
                >
                  <i className="fa-solid fa-moon"></i>
                </label>

                {/* Links to various news categories */}
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/business" className="nav-link">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/crime" className="nav-link">
                    Crime
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/education" className="nav-link">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment" className="nav-link">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/health" className="nav-link">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/politics" className="nav-link">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology" className="nav-link">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" className="nav-link">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/world" className="nav-link">
                    World
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
