import type { Station } from "../types/station";

export default function StationList({
  stations,
  onSelect,
  selectedId,
}: {
  stations: Station[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) {
  return (
    <div className="mt-4 max-h-[70vh] overflow-y-auto">
      <ul className="space-y-2 pb-6">
        {stations.map((s) => {
          const isSelected = s.id === selectedId;

          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelect(s.id)}
                className={[
                  "w-full rounded-lg border px-3 py-2 text-left",
                  "transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/30",
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50",
                ].join(" ")}
              >
                <div className="font-medium text-gray-900">{s.name}</div>
                <div className="text-sm text-gray-500">{s.city}</div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
