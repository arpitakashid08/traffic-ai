import { useNavigate } from "react-router-dom";
import "./UserSelection.css";

export default function UserSelection() {
  const navigate = useNavigate();

  return (
    <div className="selection-page">

      <div className="selection-card">

        <h1>🚦 Traffic-AI</h1>

        <h2>Select User Type</h2>

        <button onClick={() => navigate("/police")}>
          Traffic Police
        </button>

        <button onClick={() => navigate("/organizer")}>
          Event Organizer
        </button>

      </div>

    </div>
  );
}