import Window from "./Window";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function CorridorMap() {

  return (
    <Window title="Live Bengaluru Map">

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "400px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[12.9716, 77.5946]}
        >
          <Popup>
            Bengaluru City Center
          </Popup>
        </Marker>

      </MapContainer>

    </Window>
  );
}