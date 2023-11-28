import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
// import Footer from './components/Footer';
import Footermain from './components/Footermain';
import Login from './pages/Login';
import Registration from './pages/Registration';
import About from './pages/About';
import Appointment from './pages/Patients/Appointment';
import PrivateRoute from './components/Routes/Private';
import Dashboard from './pages/Patients/Dashboard';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PageNotFound from './pages/PageNotFound';
import AddDoctor from './pages/Admin/AddDoctor';
import AllDoctor from './pages/Admin/AllDoctor';

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/appointment" element={<Appointment />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/add-doctor" element={<AddDoctor />} />
            <Route path="admin/view-doctor" element={<AllDoctor />} />
          </Route>

          <Route path="*" element={<PageNotFound />}></Route>

        </Routes>

      {/* <Footer /> */}
      <Footermain />
    </div>
  )
}

export default App