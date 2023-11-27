import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
// import Footer from './components/Footer';
import Footermain from './components/Footermain';
import Login from './pages/Login';
import Registration from './pages/Registration';

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      {/* <Footer /> */}
      <Footermain />
    </div>
  )
}

export default App