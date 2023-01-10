import React from "react";
import "./App.css";
import Entry  from "./pages/entry/Entry.js";
import AdminDashboard from "./pages/dashboard/admindashboard";
import CustomerDashboard from "./pages/dashboard/customerdashboard";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
