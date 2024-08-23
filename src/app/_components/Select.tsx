export default function Select({
  name,
  options,
  label,
}: {
  name: string;
  options: string[];
  label: string;
}) {
  return (
    <div className="mb-2 mt-2">
      <label>{label}</label>
      <select
        name={name}
        className="max-h-[50px] min-h-[50px] w-full rounded-md border border-cultured p-3"
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
