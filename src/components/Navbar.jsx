import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span>🚦</span>
        <div className="logo">T-AI</div>
      </div>

      <div className="nav-right">
        <Link to="/home" className="nav-btn">HOME</Link>

        <Link to="/predict" className="nav-btn">PREDICT</Link>

        <Link to="/analytics" className="nav-btn">ANALYTICS</Link>

        <Link to="/reports" className="nav-btn">REPORTS</Link>
      </div>
    </div>
  );
}