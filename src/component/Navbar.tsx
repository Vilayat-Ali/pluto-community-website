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
          <li><a className="nav-link scrollto" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="index.html#about">Projects</a></li>
          <li><a className="nav-link scrollto" href="index.html#services">Team</a></li>
          <li><a className="nav-link scrollto" href="index.html#team">About us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <a className="btn-getstarted scrollto" href="index.html#about">Join Us</a>

    </div>
  </header>

    )

}