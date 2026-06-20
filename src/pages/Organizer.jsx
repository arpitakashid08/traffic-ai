import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Window from "../components/Window";
import "../styles/Organizer.css";

export default function Organizer() {

  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [crowd, setCrowd] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {

    const eventData = {
      eventName,
      crowd,
      location,
      date
    };

    localStorage.setItem(
      "latestEvent",
      JSON.stringify(eventData)
    );

    alert("Event Registered Successfully!");

    navigate("/home");
  };

  return (
    <div className="dashboard-bg">
      <div className="app-window">

        <Navbar />

        <div className="content">

          <h1 className="page-title">
            🎪 EVENT ORGANIZER PORTAL
          </h1>

          <Window title="Organizer Details">

            <input placeholder="Full Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Email" />
            <input placeholder="Organization Name" />

          </Window>

          <br />

          <Window title="Create Event">

            <input
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />

            <input
              placeholder="Expected Crowd"
              value={crowd}
              onChange={(e) => setCrowd(e.target.value)}
            />

            <input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              className="predict-btn"
              onClick={handleSubmit}
            >
              Submit Event
            </button>

            <button
              className="predict-btn"
              onClick={() => navigate("/predict")}
            >
              Analyze Traffic Impact
            </button>

          </Window>

        </div>

      </div>
    </div>
  );
}