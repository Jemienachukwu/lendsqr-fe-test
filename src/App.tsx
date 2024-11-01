import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import "./app.scss";
import UserDetails from "./pages/userDetails/UserDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
