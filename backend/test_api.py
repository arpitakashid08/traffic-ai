import requests

response = requests.post(
    "http://127.0.0.1:5000/predict",
    json={
        "event_cause": "public_event",
        "zone": "East Zone 1",
        "corridor": "ORR East 1",
        "requires_road_closure": True
    }
)

print(response.status_code)
print(response.text)