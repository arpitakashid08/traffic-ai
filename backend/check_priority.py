import joblib

encoder = joblib.load("../models/priority_encoder.pkl")

print(encoder.classes_)