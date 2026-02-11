export default function CityFilter({
    value,
    onChange,
  }: {
    value: string;
    onChange: (v: string) => void;
  }) {
    return (
      <input
        className="w-full mb-4 border p-2 rounded"
        placeholder="Filter by city"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  