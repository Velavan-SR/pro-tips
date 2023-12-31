import React from "react";
import {Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router}  from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Registration from "./Components/Registration";
import "./App.css"

function App() {
  return (
      <Router>

        <>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Kalvium ❤️</Link>
                </li>
                <div className="last">
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
                <li>
                  <Link to='register'>Registration Form</Link>
                </li>
                </div>
              </ul>
            </nav>
          </div>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/register" element={<Registration/>} />
          </Routes>
      
        </>

      </Router>
  
  );
}

export default App;