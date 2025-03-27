// src/App.jsx
// Importing React library to enable JSX syntax and component functionality
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Designs from './components/Designs';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

// Defining the main App component as a function
function App() {
  // Returning JSX that represents the app's structure
  return (
    // Root div with a class name for potential styling
    <div className="App">

      <Navbar />
      <Home />
      <Services />
      <Designs />
      <About />
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export for use in the app's entry point
export default App;