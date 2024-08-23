export default function Summary({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  return (
    <div className="mb-3 mt-3 text-center">
      <h2 className="text-lg font-bold">{header}</h2>
      <p className="text-warpfiend">{description}</p>
    </div>
  );
}
