import { useEffect, useMemo, useRef } from "react";
import {  MapContainer, TileLayer, Marker, Popup , useMap } from "react-leaflet";
import type { Station } from "../types/station";
import type { Marker as LeafletMarker } from "leaflet";
import L from "leaflet";
import {} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Fix marker icons for Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Props {
  stations: Station[];
  selectedId: number | null;
}

function MapFocus({
  stations,
  selectedId,
}: {
  stations: Station[];
  selectedId: number | null;
}) {
  const map = useMap();

  const selectedStation = useMemo(() => {
    if (selectedId == null) return null;
    return stations.find((s) => s.id === selectedId) ?? null;
  }, [stations, selectedId]);

  useEffect(() => {
    if (!selectedStation) return;

    map.flyTo([selectedStation.latitude, selectedStation.longitude], 12, {
      duration: 0.8,
    });
  }, [map, selectedStation]);

  return null;
}

export default function MapView({ stations, selectedId }: Props) {
  const markerRefs = useRef<Record<number, LeafletMarker | null>>({});

  useEffect(() => {
    if (selectedId == null) return;
    const marker = markerRefs.current[selectedId];
    if (marker) marker.openPopup();
  }, [selectedId]);

  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      zoom={6}
      // ✅ height قطعی (پس همیشه نقشه میاد)
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapFocus stations={stations} selectedId={selectedId} />

      {stations.map((s) => (
        <Marker
          key={s.id}
          position={[s.latitude, s.longitude]}
          ref={(ref) => {
            markerRefs.current[s.id] = ref ?? null;
          }}
        >
          <Popup autoPan>{s.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
