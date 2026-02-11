import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import type { Station } from "../types/station";

interface Props {
  stations: Station[];
  selectedId: number | null;
}

export default function MapView({ stations }: Props) {
  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      zoom={6}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((s) => (
        <Marker key={s.id} position={[s.latitude, s.longitude]}>
          <Popup>{s.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
