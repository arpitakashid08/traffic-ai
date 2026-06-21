# 🚦 Traffic-AI: Event Traffic Forecasting & Resource Optimization

Traffic-AI is an AI-powered platform designed to help **Traffic Police Departments** and **Event Organizers** manage large-scale public events more effectively.

The system predicts traffic impact, estimates required resources, and enables proactive coordination between event organizers and traffic authorities.

## 🌐 Live Demo

Deployment:

https://traffic-ai-silk.vercel.app/

---

## 🎯 Problem Statement

Large public events such as concerts, marathons, political gatherings, sports matches, and conferences often create traffic congestion and resource management challenges.

Traffic authorities frequently receive event information too late, leading to:

* Traffic jams
* Insufficient police deployment
* Poor diversion planning
* Public inconvenience

Traffic-AI aims to bridge the communication gap between event organizers and traffic police.

---

## 👥 User Roles

### 👮 Traffic Police

Traffic officers can:

* Register officer information
* View upcoming events
* Analyze event impact
* Predict traffic priority levels
* View resource recommendations
* Monitor traffic analytics

### 🎪 Event Organizer

Event organizers can:

* Register organizer details
* Create and submit new events
* Enter event location and expected crowd size
* Analyze expected traffic impact
* Coordinate with traffic authorities

---

## ✨ Features

### 🚦 Traffic Priority Prediction

Predicts event priority levels based on:

* Event type
* Zone
* Corridor
* Road closure requirements

### 👮 Resource Allocation

Provides recommendations such as:

* Number of officers required
* Barricades required
* Diversion plans

### 🗺 Interactive Traffic Map

* Live map visualization
* Corridor monitoring
* Geographic event awareness

### 📊 Analytics Dashboard

* Event statistics
* Priority distribution
* Resource insights
* Traffic monitoring metrics

### 📝 Event Registration Workflow

Event organizers can register events directly within the platform.

Future versions can automatically notify nearby traffic departments when a new event is registered.

---

## ⚠ Policy Recommendation

To ensure public safety and proper traffic planning, event organizers should register events through the platform before conducting large-scale public gatherings.

Failure to provide advance event information may lead to administrative penalties as determined by local traffic authorities and regulations.

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Recharts
* React Leaflet
* CSS

### Backend

* Python
* Flask
* Machine Learning Model

---

## 🚀 Running the Frontend

Open a terminal:

```bash
cd traffic-frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🚀 Running the Backend

Open a separate terminal:

```bash
cd backend
python3 app.py
```

Backend API runs locally and serves prediction requests.

---

## 📂 Project Structure

```text
traffic-ai/
│
├── backend/
│   ├── app.py
│   ├── model_loader.py
│   └── utils.py
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
│
├── package.json
└── README.md
```

---

## 🔮 Future Enhancements

* Real-time police notifications
* Event approval workflow
* Live traffic feeds integration
* SMS and email alerts
* AI-based diversion planning
* Historical traffic analysis
* Multi-city deployment

---


