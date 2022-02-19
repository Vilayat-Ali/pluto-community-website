import React from 'react';
import './variables.css';
import './App.css';

// Components 
import Navbar from './component/Navbar';
import Footer from './component/Footer';

// Page Components
import Home from "./pages/HomePage";

function App() {
    return (
      <>
      
      <Navbar />

      <Home />

      <Footer />

      </>
    );
  }

export default App;
