import "./base.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./pages/userPage/UserDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard/users" element={<Dashboard />} />
          <Route path="/dashboard/user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
