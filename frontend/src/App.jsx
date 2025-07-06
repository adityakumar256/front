import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from './components/Login';
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import FindResource from "./pages/FindResource";
import About from "./pages/About";
import Contact from "./components/Contact";
function Layout({ children }) {
  const location = useLocation();
  // 
  const showNavFooter = ["/", "/about", "/find-resource"].includes(location.pathname);

  return (
    <>
      {showNavFooter && <Navbar />}
      {children}
      {showNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-resource" element={<FindResource />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
