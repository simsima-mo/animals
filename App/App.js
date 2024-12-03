import React from 'react';
import Navbar from './projet/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './projet/Home';
import Footer from './projet/Footer/Footer';
import LoginSingup from './projet/LoginSingup/LoginSingup';
import Products from './projet/Products'; // Import the Products component

function App() {
  return (
    <Router>
      <Navbar />
      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSingup />} />
          <Route path="/products" element={<Products />} /> {/* Add this route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


