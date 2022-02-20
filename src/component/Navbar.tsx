import React from 'react';

import { Link } from "react-router-dom";

export default function Navbar(){

    return (

        <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <h1>Neuron<span>.</span></h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          
          <Link to="/">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Home</a></li>
          </Link>

          <Link to="/projects">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Projects</a></li>
          </Link>

          <Link to="/team">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Team</a></li>
          </Link>

          <Link to="/about-us">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>About us</a></li>
          </Link>

        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <Link to="/projects" className="mb-3">
      <a className="btn-getstarted scrollto" href="index.html#about">Join Us</a>
      </Link>

    </div>
  </header>

    )

}