import Window from "./Window";

export default function Gauge({
  prediction
}) {

  let percent = 50;

  if (prediction.priority === "Low")
    percent = 30;

  if (prediction.priority === "Medium")
    percent = 60;

  if (prediction.priority === "High")
    percent = 90;

  return (

    <Window title="Prediction Result">

      <div
        style={{
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "70px"
          }}
        >
          {percent}%
        </h1>

        <h2>
          Predicted Priority
        </h2>

        <h1
          style={{
            color:
              prediction.priority === "High"
                ? "red"
                : prediction.priority === "Medium"
                ? "orange"
                : "green"
          }}
        >
          {prediction.priority}
        </h1>

      </div>

    </Window>
  );
}