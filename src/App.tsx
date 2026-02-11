import { useEffect, useMemo, useState } from "react";
import { fetchStations } from "./api/stations";
import type { Station } from "./types/station";
import MapView from "./components/MapView";
import StationList from "./components/StationList";
import CityFilter from "./components/CityFilter";

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetchStations()
      .then(setStations)
      .catch(() => setError("Could not load stations"))
      .finally(() => setLoading(false));
  }, []);

  const filteredStations = useMemo(() => {
    if (!city) return stations;
    return stations.filter((s) =>
      s.city.toLowerCase().includes(city.toLowerCase())
    );
  }, [stations, city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-1 p-4">
        <CityFilter value={city} onChange={setCity} />
        <StationList stations={filteredStations} onSelect={setSelectedId} />
      </div>

      <div className="col-span-2">
        <MapView stations={filteredStations} selectedId={selectedId} />
      </div>
    </div>
  );
}

export default App;
