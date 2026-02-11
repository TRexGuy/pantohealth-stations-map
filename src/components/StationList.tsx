import type { Station } from "../types/station";

export default function StationList({
  stations,
  onSelect,
}: {
  stations: Station[];
  onSelect: (id: number) => void;
}) {
  return (
    <ul className="space-y-2">
      {stations.map((s) => (
        <li
          key={s.id}
          onClick={() => onSelect(s.id)}
          className="cursor-pointer border p-2 rounded hover:bg-gray-100"
        >
          <div className="font-bold">{s.name}</div>
          <div className="text-sm text-gray-500">{s.city}</div>
        </li>
      ))}
    </ul>
  );
}
