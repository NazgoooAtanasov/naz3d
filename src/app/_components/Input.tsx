export default function Input({
  name,
  type,
  label,
  placeholder = "",
}: {
  name: string;
  type: "text" | "number";
  label: string;
  placeholder?: string;
}) {
  return (
    <div className="mb-2 mt-2 w-full">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className="max-h-[50px] w-full rounded-md border border-cultured bg-white p-3"
        placeholder={placeholder}
      />
    </div>
  );
}
