import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import NavBar from "./components/NavBar";
import User from "./pages/user";
import { HeaderComponent } from "./components/header";

export const AppRouter: React.FC<{}> = () => {
  return (
    <div className="app">
      <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
    </div>
  );
};
