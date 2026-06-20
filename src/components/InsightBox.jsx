import Window from "./Window";

export default function InsightBox({
  prediction
}) {
  return (
    <Window title="AI Insight Box">

      <p>
        {prediction.insight}
      </p>

    </Window>
  );
}