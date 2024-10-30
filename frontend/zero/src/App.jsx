import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Docs from "./pages/Docs";
import GetStarted from "./pages/GetStarted";
import Features from "./pages/Features";
import Careers from "./pages/Careers";
import PaymentGateways from "./pages/PaymentGateways";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/blogs" element={<Docs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/payment" element={<PaymentGateways />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
