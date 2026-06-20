import { useState } from "react";

import "./Dashboard.css";

import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import Gauge from "../components/Gauge";
import RecommendationPanel from "../components/RecommendationPanel";
import CorridorMap from "../components/CorridorMap";
import InsightBox from "../components/InsightBox";

export default function Dashboard() {

  const [prediction, setPrediction] = useState({
    priority: "Medium",
    officers: 20,
    barricades: 10,
    diversions: "None",
    insight: "Waiting for prediction..."
  });

  return (
    <div className="dashboard-bg">

      <div className="app-window">

        <Navbar />

        <div className="content">

          <h1 className="page-title">
            🚦 EVENT PREDICTION
          </h1>

          <div className="dashboard-grid">

            <div className="left-column">

              <EventForm
                setPrediction={setPrediction}
              />

              <CorridorMap />

            </div>

            <div className="right-column">

              <Gauge
                prediction={prediction}
              />

              <RecommendationPanel
                prediction={prediction}
              />

              <InsightBox
                prediction={prediction}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}