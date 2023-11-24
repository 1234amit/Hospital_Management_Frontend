import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
// import Footer from './components/Footer';
import Footermain from './components/Footermain';

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      {/* <Footer /> */}
      <Footermain />
    </div>
  )
}

export default App