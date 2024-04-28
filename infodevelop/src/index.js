import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ServicePage from './components/ServicePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <div className="page-container">
      <div className='content-wrap'>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ServicePage />} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
