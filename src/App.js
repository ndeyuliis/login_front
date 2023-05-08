import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import NavBar from "./components/NavBar";
import User from "./pages/user";
import { HeaderComponent } from "./components/header"
import SingUp from "./pages/singup"

function App() {
  return (
    <div className="container">
      
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
