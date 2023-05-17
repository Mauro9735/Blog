import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Layouts/Home";
import Footer from "./Components/footer";



function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
  
}

export default App;
