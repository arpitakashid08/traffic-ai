from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("../models/priority_model.pkl")

# Load encoders
event_encoder = joblib.load("../models/event_encoder.pkl")
zone_encoder = joblib.load("../models/zone_encoder.pkl")
corridor_encoder = joblib.load("../models/corridor_encoder.pkl")
priority_encoder = joblib.load("../models/priority_encoder.pkl")

print("MODEL LOADED SUCCESSFULLY")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    event_cause = data["event_cause"]
    zone = data["zone"]
    corridor = data["corridor"]
    requires_road_closure = data["requires_road_closure"]

    event_cause = event_encoder.transform([event_cause])[0]
    zone = zone_encoder.transform([zone])[0]
    corridor = corridor_encoder.transform([corridor])[0]

    input_df = pd.DataFrame(
        [[
            event_cause,
            zone,
            corridor,
            requires_road_closure
        ]],
        columns=[
            "event_cause",
            "zone",
            "corridor",
            "requires_road_closure"
        ]
    )
    print(input_df)
    prediction = model.predict(input_df)[0]
    print("PREDICTION:", prediction)

    priority = priority_encoder.inverse_transform(
        [prediction]
    )[0]

    return jsonify({
        "priority": priority
    })


if __name__ == "__main__":
    app.run(debug=True)