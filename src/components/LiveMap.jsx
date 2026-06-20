import Window from "./Window";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LiveMap() {
  return (
    <Window title="Live Bengaluru Traffic Map">

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "400px",
          width: "100%"
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[12.9716, 77.5946]}>
          <Popup>
            Bengaluru City Center
          </Popup>
        </Marker>

      </MapContainer>

    </Window>
  );
}