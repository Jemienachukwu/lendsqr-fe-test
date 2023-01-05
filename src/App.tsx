import "./base.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
