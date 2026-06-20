import joblib

print("EVENTS:")
print(joblib.load("../models/event_encoder.pkl").classes_)

print("\nZONES:")
print(joblib.load("../models/zone_encoder.pkl").classes_)

print("\nCORRIDORS:")
print(joblib.load("../models/corridor_encoder.pkl").classes_)