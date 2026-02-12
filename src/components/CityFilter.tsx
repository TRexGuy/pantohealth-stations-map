export default function CityFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Filter by city"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
          w-full mb-6 rounded-lg border border-gray-300
          px-4 py-2 text-sm text-gray-900
          placeholder-gray-400
          focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100
          transition
        "
    />
  );
}
