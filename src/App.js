// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import Dashboard from "./Pages/Dashboard";
import Finish from "./Pages/Finish";
import Input from "./Pages/Input";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Input />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/finish" element={<Finish />}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
