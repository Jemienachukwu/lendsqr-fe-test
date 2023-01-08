import "./base.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./pages/userPage/UserDetails";
// import Pagination from "./components/pagination";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/1" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
