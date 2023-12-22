import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import Contact from './Contactme'
import Bio from './BIO'
import './main.css'
import Qualifications from './Qualifications';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='bio' element={<Bio />} />
        <Route path='qualifications' element={<Qualifications />} />
        <Route path='contactme' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
