// Importing React library to enable JSX syntax and component functionality
import React from 'react';
// Importing ReactDOM for rendering React components into the DOM
import ReactDOM from 'react-dom/client';
// Importing global CSS styles to apply to the entire application
import './index.css';
// Importing the main App component that contains the application's structure
import App from './App';
// Importing a utility to measure and report web performance metrics
import reportWebVitals from './reportWebVitals';

// Creating a root DOM node for React to render into, targeting the HTML element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the React application into the root DOM node
root.render(
  // Enabling StrictMode to highlight potential problems in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Calling reportWebVitals to measure performance (currently does nothing unless configured)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();