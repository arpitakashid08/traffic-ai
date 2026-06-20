import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Window from "../components/Window";

export default function Police() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [station, setStation] = useState("");
  const [area, setArea] = useState("");

  return (
    <div className="dashboard-bg">

      <div className="app-window">

        <Navbar />

        <div className="content">

          <h1 className="page-title">
            👮 Traffic Police Registration
          </h1>

          <Window title="Officer Details">

            <div className="form-group">

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="text"
                placeholder="Police Station"
                value={station}
                onChange={(e) => setStation(e.target.value)}
              />

              <input
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />

              <button
                className="submit-btn"
                onClick={() => navigate("/home")}
              >
                Continue
              </button>

            </div>

          </Window>

        </div>

      </div>

    </div>
  );
}