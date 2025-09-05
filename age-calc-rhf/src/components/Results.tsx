export default function Results({
  years,
  months,
  days,
}: {
  years?: number;
  months?: number;
  days?: number;
}) {
  const fmt = (v?: number) => (typeof v === "number" ? String(v) : "--");
  return (
    <div
      className="mt-6 text-6xl sm:text-8xl
font-extrabold leading-tight"
    >
      <p>
        <span className="text-[var(--accent)] font-extrabold">
          {fmt(years)}
        </span>{" "}
        <span className="italic font-extrabold">years</span>
      </p>
      <p>
        <span className="text-[var(--accent)] font-extrabold">
          {fmt(months)}
        </span>{" "}
        <span className="italic font-extrabold">months</span>
      </p>
      <p>
        <span className="text-[var(--accent)] font-extrabold">{fmt(days)}</span>{" "}
        <span className="italic font-extrabold">days</span>
      </p>
    </div>
  );
}
