import Navbar from "../components/Navbar";
import Window from "../components/Window";
import "../styles/Home.css";

export default function Home() {

  const latestEvent =
    JSON.parse(localStorage.getItem("latestEvent"));

  return (
    <div className="dashboard-bg">

      <div className="app-window">

        <Navbar />

        <div className="content">

          <h1 className="page-title">
            🏠 TRAFFIC-AI CONTROL CENTER
          </h1>

          <div className="home-cards">

            <Window title="Today's Events">
              <div className="card-value">42</div>
            </Window>

            <Window title="Road Closures">
              <div className="card-value">11</div>
            </Window>

            <Window title="High Priority">
              <div className="card-value red">8</div>
            </Window>

            <Window title="Active Corridors">
              <div className="card-value">17</div>
            </Window>

          </div>

          <div className="home-grid">

            <Window title="Upcoming City Events">

              <div className="event-list">

                {latestEvent ? (
                  <>
                    <p>🎉 {latestEvent.eventName}</p>
                    <p>📍 {latestEvent.location}</p>
                    <p>📅 {latestEvent.date}</p>
                    <p>👥 Crowd: {latestEvent.crowd}</p>
                  </>
                ) : (
                  <>
                    <p>🏏 IPL Match - Chinnaswamy Stadium</p>
                    <p>🎤 Music Concert - Palace Grounds</p>
                    <p>🏃 Bengaluru Marathon</p>
                    <p>🎓 Tech Conference - Whitefield</p>
                    <p>🚩 Political Gathering - CBD Area</p>
                  </>
                )}

              </div>

            </Window>

            <Window title="System Overview">

              <div className="event-list">

                <p>🚦 Live Traffic Monitoring</p>
                <p>🤖 ML-Based Priority Prediction</p>
                <p>👮 Resource Allocation Engine</p>
                <p>🗺 Corridor Monitoring</p>
                <p>📊 Real-Time Analytics</p>

              </div>

            </Window>

          </div>

        </div>

      </div>

    </div>
  );
}