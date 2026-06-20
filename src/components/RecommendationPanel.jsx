import Window from "./Window";
import "./RecommendationPanel.css";

export default function RecommendationPanel({ prediction }) {
  return (
    <Window title="Recommendation Panel">

      <div className="recommendation-panel">

        <div className="recommendation-item">
          👮 Officers Required: {prediction.officers}
        </div>

        <div className="recommendation-item">
          🚧 Barricades Required: {prediction.barricades}
        </div>

        <div className="recommendation-item">
          🛣 Diversion Plan: {prediction.diversions}
        </div>

      </div>

    </Window>
  );
}