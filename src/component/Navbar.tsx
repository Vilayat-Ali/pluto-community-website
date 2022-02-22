import React from 'react';

import { NavLink } from "react-router-dom";

export default function Navbar(){

    return (

        <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <h1>Neuron<span>.</span></h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          
          <NavLink to="/">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Home</a></li>
          </NavLink>

          <NavLink to="/projects">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Projects</a></li>
          </NavLink>

          <NavLink to="/team">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>Team</a></li>
          </NavLink>

          <NavLink to="/about-us">
          <li><a className="nav-link scrollto" style={{cursor: 'pointer'}}>About us</a></li>
          </NavLink>

        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <NavLink to="/join" className="mb-3">
      <a className="btn-getstarted scrollto">Join Us</a>
      </NavLink>

    </div>
  </header>

    )

}