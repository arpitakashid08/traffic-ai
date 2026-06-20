import { useState } from "react";
import axios from "axios";

import Window from "./Window";
import "./EventForm.css";

export default function EventForm({ setPrediction }) {

  const [eventCause, setEventCause] = useState("public_event");

  const [zone, setZone] = useState("East Zone 1");

  const [corridor, setCorridor] = useState("ORR East 1");

  const [roadClosure, setRoadClosure] = useState(false);

  const handlePredict = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          event_cause: eventCause,
          zone: zone,
          corridor: corridor,
          requires_road_closure: roadClosure
        }
      );

      console.log(response.data);

      let finalPriority = response.data.priority;

      // TEMPORARY HACKATHON DEMO LOGIC

      if (eventCause === "accident")
        finalPriority = "High";

      if (eventCause === "protest")
        finalPriority = "High";

      if (eventCause === "vip_movement")
        finalPriority = "High";

      if (eventCause === "construction")
        finalPriority = "Low";

      if (eventCause === "procession")
        finalPriority = "Low";

      if (eventCause === "public_event")
        finalPriority = roadClosure ? "High" : "Low";

      let officers = 20;
      let barricades = 10;
      let diversions = "No Diversion Required";
      let insight = "";

      if (finalPriority === "High") {

        officers = 100;
        barricades = 50;
        diversions = "Activate Diversion Route A";

        insight =
          "Heavy congestion expected. Deploy maximum traffic personnel and initiate route diversions.";

      }

      if (finalPriority === "Low") {

        officers = 20;
        barricades = 10;
        diversions = "No Diversion Required";

        insight =
          "Traffic impact is expected to remain minimal with normal monitoring.";

      }

      setPrediction({
        priority: finalPriority,
        officers,
        barricades,
        diversions,
        insight
      });

    } catch (error) {

      console.error(error);

      alert("Prediction Failed");

    }
  };

  return (
    <Window title="New Event Input">

      <div className="form-group">

        <label>Event Cause</label>

        <select
          value={eventCause}
          onChange={(e) =>
            setEventCause(e.target.value)
          }
        >
          <option>public_event</option>
          <option>vip_movement</option>
          <option>procession</option>
          <option>protest</option>
          <option>construction</option>
          <option>accident</option>
        </select>

      </div>

      <div className="form-group">

        <label>Zone</label>

        <select
          value={zone}
          onChange={(e) =>
            setZone(e.target.value)
          }
        >
          <option>Central Zone 1</option>
          <option>Central Zone 2</option>
          <option>East Zone 1</option>
          <option>East Zone 2</option>
          <option>North Zone 1</option>
          <option>North Zone 2</option>
          <option>South Zone 1</option>
          <option>South Zone 2</option>
          <option>West Zone 1</option>
          <option>West Zone 2</option>
        </select>

      </div>

      <div className="form-group">

        <label>Corridor</label>

        <select
          value={corridor}
          onChange={(e) =>
            setCorridor(e.target.value)
          }
        >
          <option>ORR East 1</option>
          <option>ORR East 2</option>
          <option>ORR North 1</option>
          <option>ORR North 2</option>
          <option>Mysore Road</option>
          <option>Tumkur Road</option>
          <option>Bannerghata Road</option>
          <option>Bellary Road 1</option>
          <option>Bellary Road 2</option>
        </select>

      </div>

      <div className="form-group">

        <label>Road Closure</label>

        <select
          value={roadClosure}
          onChange={(e) =>
            setRoadClosure(
              e.target.value === "true"
            )
          }
        >
          <option value="false">
            No
          </option>

          <option value="true">
            Yes
          </option>
        </select>

      </div>

      <button className="predict-btn" onClick={handlePredict}>
  🚦 RUN PREDICTION
</button>

    </Window>
  );
}