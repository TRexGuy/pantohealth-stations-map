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
    const q = city.trim().toLowerCase();
    if (!q) return stations;
    return stations.filter((s) => s.city.toLowerCase().includes(q));
  }, [stations, city]);

  const handleSelect = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (selectedId == null) return;
    const stillVisible = filteredStations.some((s) => s.id === selectedId);
    if (!stillVisible) setSelectedId(null);
  }, [filteredStations, selectedId]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        Loading stations...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex items-center justify-center">
      <div
        className={[
          "w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-lg",

          "grid grid-cols-1 md:grid-cols-3",

          "md:h-[80vh]",
        ].join(" ")}
      >
        <aside className="md:col-span-1 p-6 flex flex-col border-b md:border-b-0 md:border-r">
          <div className="text-center">
            <h1 className="text-lg font-semibold text-gray-900">
              Germany Stations
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Filter by city and pick a station
            </p>
          </div>

          <div className="mt-5">
            <CityFilter value={city} onChange={setCity} />
          </div>

          <div className="mt-4 md:flex-1 md:overflow-y-auto md:pr-1 max-h-[45vh] overflow-y-auto pr-1">
            <StationList
              stations={filteredStations}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
          </div>
        </aside>

        <main className="md:col-span-2 h-[50vh] md:h-full">
          <MapView stations={filteredStations} selectedId={selectedId} />
        </main>
      </div>
    </div>
  );
}

export default App;
