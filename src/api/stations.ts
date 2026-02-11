import type { Station } from "../types/station";

type ApiStation = {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
};

const API_URL =
  "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw";

export async function fetchStations(): Promise<Station[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch stations");
  }

  const data: ApiStation[] = await res.json();

  return data.map((s) => ({
    id: s.id,
    name: s.name,
    city: s.city,
    latitude: s.lat,
    longitude: s.lng,
  }));
}
